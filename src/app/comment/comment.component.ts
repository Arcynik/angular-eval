import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from 'src/types';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() movieId!: number;
  @Output() addCommentEvent = new EventEmitter<Comment>();
  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private commentService: CommentService) { 
    this.commentForm = this.formBuilder.group({
      rating: '',
      text: ''
    })
  }

  ngOnInit(): void {}

  addComment() {
    const commentData = this.commentForm.value;
    this.commentService.createComment(this.movieId, commentData).subscribe({
      next: (updatedComment: Comment) => {
        this.addCommentEvent.emit(updatedComment);
      }
    });
  }
}
