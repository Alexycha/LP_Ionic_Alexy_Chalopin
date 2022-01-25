import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../service/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  constructor(public photosService: PhotosService) { }

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photosService.addNewToGallery();
  }

}
