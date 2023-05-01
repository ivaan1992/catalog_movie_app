import { Component } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe((data: any) => {
      this.movies = data.results;    
    });
  }
}
