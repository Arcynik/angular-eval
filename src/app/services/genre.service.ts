import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Genre } from 'src/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenreService {

  private serverUrl: string = "https://movie-api.benoithubert.me/genres";

  constructor(private http: HttpClient) {}

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.serverUrl}`);
  }
}
