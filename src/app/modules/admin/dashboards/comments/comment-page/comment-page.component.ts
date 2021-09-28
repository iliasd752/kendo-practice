import { Component, OnInit } from '@angular/core';
import {CommentListService} from "../comment-list.service";

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss']
})
export class CommentPageComponent implements OnInit {

    comments = [];
  constructor(private commentList: CommentListService) { }

  ngOnInit(): void {
      this.commentList.getComments().subscribe(console.log);
  }

}
