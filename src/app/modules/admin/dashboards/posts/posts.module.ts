import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {postRoutes} from './posts.routing';
import {ListViewModule} from '@progress/kendo-angular-listview';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes),
    ListViewModule,
    NgxDatatableModule,
    NgxPaginationModule
  ]
})
export class PostsModule {

}


