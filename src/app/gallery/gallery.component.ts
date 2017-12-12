import { Component, OnInit } from '@angular/core';
import {} from '@types/googlemaps';

import { mapStyles } from './../shared/global/mapStyles';
import { ImageService } from './../shared/services/image.service';
import { Image } from './../shared/models/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  public favouriteImages: Image[] = [];
  lat: Number = 52.467540;
  lng: Number = 16.927325;

  styles: google.maps.MapTypeStyle[] = [];

  constructor(private imageService: ImageService) {
    this.styles = mapStyles;

    this.imageService.getFavouriteImages()
    .subscribe(images => this.favouriteImages = images);
  }

  ngOnInit() {
  }

  private convertStringToNumber(value: string): number {
    return +value;
  }
}
