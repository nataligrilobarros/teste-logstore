import { Component, OnInit } from '@angular/core';
import { FilmeModel } from 'src/app/models/filme.model';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public resultados: any = {};
  public filmesEmCartas: FilmeModel[] = [];
  public paginaAtual: number = 1;
  public totalPaginas: number = 0;
  public totalFilmes: number = 0;

  constructor(private filmesService: FilmesService) { 
  }

  ngOnInit(): void {
    this.getFilmesCartas();
  }

  public getFilmesCartas(){
    this.filmesEmCartas = [];
    this.filmesService.filmesNoCartas(this.paginaAtual).subscribe(filmes => {
      this.filmesEmCartas = filmes.results;
      this.resultados = filmes;
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
      this.getFilmesCartas();
  }

  public carregarMaisFilmesProximo(){
    this.paginaAtual++; 
    if(this.paginaAtual >= this.totalPaginas){
      this.paginaAtual = this.totalPaginas;
    }
    if(this.paginaAtual <= 1){
      this.paginaAtual = 1;
    }
    this.getFilmesCartas();
  }

}
