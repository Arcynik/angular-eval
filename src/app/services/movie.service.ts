import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from 'src/types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private serverUrl: string = "https://movie-api.benoithubert.me/movies/";

  constructor(
    private http: HttpClient
  ) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.serverUrl}`);
  }
}
