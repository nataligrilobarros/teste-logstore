import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesRoutingModule } from './filmes-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { BuscaComponent } from './busca/busca.component';


@NgModule({
  declarations: [
    BannerComponent,
    DetalhesComponent,
    BuscaComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
  ]
})
export class FilmesModule { }
