import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ShowMovieComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MoviesModule { }
