import { Component, OnInit } from '@angular/core';

import { ImageService } from './../shared/services/image.service';
import { Image } from './../shared/models/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  public favouriteImages: Image[] = [];

  constructor(
    private imageService: ImageService
  ) {
    this.imageService.getFavouriteImages()
    .subscribe(images => this.favouriteImages = images);
  }

  ngOnInit() {
  }

}
