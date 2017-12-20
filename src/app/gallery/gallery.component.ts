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

  public images: Image[] = [];
  lat: Number = 52.467540;
  lng: Number = 16.927325;
  public selectedImage: Image;
  public showPolaroidModal: Boolean = false;
  public thumbnailOnMap = null;

  styles: google.maps.MapTypeStyle[] = [];

  constructor(private imageService: ImageService) {
    this.styles = mapStyles;

    this.imageService.getFavouriteImages()
    .subscribe(images => this.images = images);
  }

  ngOnInit() {
  }

  private convertStringToNumber(value: string): number {
    return +value;
  }

  public removeImage(image): void {
    this.images.splice(this.images.indexOf(image), 1);
  }

  public togglePolaroidModal(): void {
    this.showPolaroidModal = !this.showPolaroidModal;
  }

  public mouseOver(infoWindow, $event) {
    if (this.thumbnailOnMap !== null) {
      this.thumbnailOnMap.close();
    }

    this.thumbnailOnMap = infoWindow;
    infoWindow.open();
  }

  public showPolaroid(image: Image): void {
    this.selectedImage = image;
    this.togglePolaroidModal();
  }
}
