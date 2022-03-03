import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from 'src/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private serverUrl: string = "https://movie-api.benoithubert.me/movies/";
  private serverUrlMoviesByGenre: string = "https://movie-api.benoithubert.me/movies?genre=";

  constructor(
    private http: HttpClient
  ) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.serverUrl}`);
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.serverUrl}${movieId}`);
  }

  getMoviesByGenre(genreName: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.serverUrlMoviesByGenre}${genreName}`);
  }
}
