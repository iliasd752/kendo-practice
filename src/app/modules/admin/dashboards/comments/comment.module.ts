import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CommentPageComponent} from './comment-page/comment-page.component';
import {commentsRoutes} from './comments.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(commentsRoutes)
  ]
})
export class CommentModule { }
