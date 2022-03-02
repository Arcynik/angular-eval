import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/types';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input() comments!: Comment[];

  constructor() {}

  ngOnInit(): void {
    console.info(this.comments);
  }



}
