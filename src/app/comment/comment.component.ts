import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() movieId!: number;
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
    this.commentService.createComment(this.movieId, commentData).subscribe();
  }
}
