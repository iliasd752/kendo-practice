import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CommentPageComponent} from './comment-page/comment-page.component';
import {commentsRoutes} from './comments.routing';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(commentsRoutes),
    NgxDatatableModule,
    NgxPaginationModule
  ]
})
export class CommentModule { }
