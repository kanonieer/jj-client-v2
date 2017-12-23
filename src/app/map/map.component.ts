import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../shared/models/Image';
import {} from '@types/googlemaps';
import { mapStyles } from './../shared/global/mapStyles';
import { NgForm } from '@angular/forms';
import { google, LatLngBoundsLiteral } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  @Input() public images: Image[] = [];
  @Output() public openImageModal: EventEmitter<Image> = new EventEmitter<Image>();
  public mapImages: Image[] = [];
  public selectedImage: Image;
  public thumbnailOnMap = null;
  public longitude: Number = 16.9273255;
  public latitude: Number = 52.467540;
  public zoom: Number;
  public fitBounds;
  private styles: google.maps.MapTypeStyle[] = [];

  constructor() {

  }

  ngOnInit() {
    this.initMapStyles(mapStyles);
    this.initMapStart(this.images);
    this.initMapZoom(13);
    this.mapImages = this.getImagesForMap(this.images);
    this.fitBounds = this.getMapBounds(this.mapImages);
  }

  public getImagesForMap(images: Image[]) {
    return images.filter(image => image.latitude !== '' && image.longitude !== '');
  }

  public openModal(image: Image) {
    this.openImageModal.emit(image);
  }

  public mouseOver(infoWindow, $event) {
    if (this.thumbnailOnMap !== null) {
      this.thumbnailOnMap.close();
    }

    this.thumbnailOnMap = infoWindow;
    infoWindow.open();
  }

  private initMapStyles(styles: google.maps.MapTypeStyle[]) {
    this.styles = styles;
  }

  private initMapStart(images: Image[]): void {
    let index = 0, found = false;

    while (images[index] && !found) {
      if (images[index].longitude && images[index].longitude !== '') {
        this.longitude = this.convertStringToNumber(this.images[index].longitude);
        this.latitude = this.convertStringToNumber(this.images[index].latitude);
        found = true;
      }
      index++;
    }
  }

  private initMapZoom(zoom: Number): void {
    this.zoom = zoom;
  }

  private getMapBounds(images: Image[]): LatLngBoundsLiteral {
    if (images.length) {
      let minLatitude = images[0].latitude,
      maxLatitude = images[0].latitude,
      minLongitude = images[0].longitude,
      maxLongitude = images[0].longitude;

      images.forEach(image => {
        maxLongitude = (image.longitude > maxLongitude) ? image.longitude : maxLongitude;
        minLongitude = (image.longitude < minLongitude) ? image.longitude : minLongitude;
        minLatitude = (image.latitude < minLatitude) ? image.latitude : minLatitude;
        maxLatitude = (image.latitude > maxLatitude) ? image.latitude : maxLatitude;
      });

      return {
        east: this.convertStringToNumber(maxLongitude),
        west: this.convertStringToNumber(minLongitude),
        north: this.convertStringToNumber(maxLatitude),
        south: this.convertStringToNumber(minLatitude)
      };
    }
  }

  private convertStringToNumber(value: String): number {
    return +value;
  }
}
