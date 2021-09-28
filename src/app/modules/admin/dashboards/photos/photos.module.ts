import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoSlideComponent } from './photo-slide/photo-slide.component';
import {RouterModule} from '@angular/router';
import {photoRoutes} from './photos.routing';



@NgModule({
  declarations: [
    PhotoSlideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(photoRoutes)
  ]
})
export class PhotosModule { }
