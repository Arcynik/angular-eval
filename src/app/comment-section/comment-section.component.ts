import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/types';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input() movieId!: number;
  @Input() comments!: Comment[];

  constructor() {}

  ngOnInit(): void {} 

  updateComments(newComment: Comment) {
    this.comments.push(newComment);
  }
}
