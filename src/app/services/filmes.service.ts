import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private  API_KEY = "32b2538fae9d6a2e14d1539dde85893f";
  private LANGUAGE = "pt-BR"

  constructor(
    private http: HttpClient 
  ) { }

  public filmesNoCartas(pagina: number): Observable <any> {
    if(pagina <= 0){
      pagina = 1;
    }
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=${this.LANGUAGE}&page=${pagina}`);
  }

  public filmesRecomendados(pagina: number, idFilme: number): Observable <any> {
    if(pagina <= 0){
      pagina = 1;
    }
    return this.http.get(`https://api.themoviedb.org/3/movie/${idFilme}/recommendations?api_key=${this.API_KEY}&language=${this.LANGUAGE}&page=${pagina}`);
  }


  public getDetalhesFilme(id: number): Observable <any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=${this.LANGUAGE}`);
  }

  public pesquisarFilme(pesquisa: string): Observable <any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=${this.LANGUAGE}&query=${pesquisa}`);
  }




}
