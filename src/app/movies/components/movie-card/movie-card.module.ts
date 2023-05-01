import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MovieCardComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    MovieCardComponent
  ]
})
export class MovieCardModule { }
