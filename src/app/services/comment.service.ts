import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  serverUrl = 'https://movie-api.benoithubert.me/movies/';
  commentPath = '/comments'

  constructor(private http: HttpClient) {}

  createComment(movieId: number, commentData: Partial<Comment>): Observable<Comment> {
    return this.http.post<Comment>(`${this.serverUrl}${movieId}${this.commentPath}`, commentData);
  }
}
