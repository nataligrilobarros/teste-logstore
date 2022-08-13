import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FilmesService } from './services/filmes.service';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmesModule } from './filmes/filmes.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    LayoutModule,
    FilmesModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
