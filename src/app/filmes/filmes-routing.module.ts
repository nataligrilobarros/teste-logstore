import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { BuscaComponent } from './busca/busca.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  {path: '', component: BannerComponent},
  {path: 'home', component: BannerComponent},
  {path: 'detalhes/:id', component: DetalhesComponent},
  {path: 'busca/:pesquisa', component: BuscaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
