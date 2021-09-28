import { Component, OnInit } from '@angular/core';
import {ShowPhotoService} from '../show-photo.service';

@Component({
  selector: 'app-photo-slide',
  templateUrl: './photo-slide.component.html',
  styleUrls: ['./photo-slide.component.scss']
})
export class PhotoSlideComponent implements OnInit {

  constructor(private showPhotoService: ShowPhotoService) { }

  ngOnInit(): void {
    this.showPhotoService.getPhotos().subscribe(console.log);
  }

}
