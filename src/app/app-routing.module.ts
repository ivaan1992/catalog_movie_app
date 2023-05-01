import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './movies/home/home.component';
import { ShowMovieComponent } from './movies/show-movie/show-movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'movie/:id',
    component: ShowMovieComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: ''
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
