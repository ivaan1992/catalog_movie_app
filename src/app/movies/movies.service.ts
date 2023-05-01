import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = 'f2f5d10b7aec55d651ba50d1eb7683a1';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  /*
  getMovie() {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }*/
}
