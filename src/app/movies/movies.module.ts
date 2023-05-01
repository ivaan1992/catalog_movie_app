import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { MovieCardModule } from './components/movie-card/movie-card.module';

@NgModule({
  declarations: [
    HomeComponent,
    ShowMovieComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    MovieCardModule,
  ],
  exports: [
    HomeComponent,
    ShowMovieComponent
  ]
})
export class MoviesModule { }
