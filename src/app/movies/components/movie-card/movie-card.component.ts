import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() title: string = "";
  @Input() image: string = "";
  @Input() id: string = "";
  @Input() show: boolean = false;
  @Input() description: string = "";
  @Input() date: string = "";
  @Input() rating: string = "";

  constructor(private router: Router) {}
  
  navigate() {
    this.router.navigate([`/movie/${this.id}`])
  }

  get cardClasses(): string {
    console.log(this.show, 'movie-card ' + (this.show ? 'big-movie-card' : ''));
    return 'movie-card ' + (this.show ? 'big-movie-card' : '');
  }
}
