import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/types';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
