import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeModel } from 'src/app/models/filme.model';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public filmesRecomendados: FilmeModel[] = [];
  public filme: FilmeModel = new FilmeModel();
  public generos: any[] = [];
  public totalPaginas: number = 0;
  public totalFilmes: number = 0;
  public paginaAtual: number = 1;
  public idFilme: number = 1;


  constructor(
    private filmesService: FilmesService,
    private route : Router, 
    private activeRoute : ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.filmesService.getDetalhesFilme(+params['id']).subscribe(filme => {
            this.filme = filme;
            this.idFilme = params['id'];
            this.generos = filme.genres;
            this.getFilmesRecomendados();
          }, 
          error => console.log('Opss deu erro ' + error))
      }
    });
  }

  public getFilmesRecomendados(){
    this.filmesRecomendados = [];
    this.filmesService.filmesRecomendados(this.paginaAtual, this.idFilme).subscribe(filmes => {
      this.filmesRecomendados = filmes.results;
      this.totalPaginas = filmes.total_pages;
      this.totalFilmes = filmes.total_results;
    });
  }

  public carregarMaisFilmesAnterior(){
    this.paginaAtual--; 
    if(this.paginaAtual >= this.totalPaginas){
      this.paginaAtual = this.totalPaginas;
    }
    if(this.paginaAtual <= 1){
      this.paginaAtual = 1;
    }
    this.getFilmesRecomendados();
  }

  public carregarMaisFilmesProximo(){
    this.paginaAtual++; 
    if(this.paginaAtual >= this.totalPaginas){
      this.paginaAtual = this.totalPaginas;
    }
    if(this.paginaAtual <= 1){
      this.paginaAtual = 1;
    }
    this.getFilmesRecomendados();
  }

}
