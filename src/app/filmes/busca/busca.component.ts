import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeModel } from 'src/app/models/filme.model';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  public filmesEncontrados: FilmeModel[] = [];
  public filmePesquisado: string = "";
  public total_pages: number = 0;
  public total_results: number = 0;

  constructor(
    private filmesService: FilmesService,
    private route : Router, 
    private activeRoute : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.filmePesquisado = params['pesquisa'];
      if (params.hasOwnProperty('pesquisa')) {
        this.filmesService.pesquisarFilme(params['pesquisa']).subscribe(filmes => {
            this.filmesEncontrados = filmes.results;
            this.total_pages = filmes.total_pages;
            this.total_results = filmes.total_results;
          }, 
          error => console.log('Opss deu erro ' + error))
      }
    });
  }

}
