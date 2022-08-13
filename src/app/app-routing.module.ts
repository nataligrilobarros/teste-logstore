import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesModule } from './filmes/filmes.module';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule)
    }  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FilmesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }