import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './movies/pages/home/home.component';
import { ShowMovieComponent } from './movies/pages/show-movie/show-movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movie/:id',
    component: ShowMovieComponent,
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
