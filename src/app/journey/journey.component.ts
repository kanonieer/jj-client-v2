import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {} from '@types/googlemaps';

import { mapStyles } from './../shared/global/mapStyles';
import { ImageService } from './../shared/services/image.service';
import { JourneysService } from './../shared/services/journeys.service';
import { Journey } from './../shared/models/Journey';
import { Image } from './../shared/models/Image';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.less']
})
export class JourneyComponent implements OnInit {

  public journey: Journey = new Journey();
  public images: Image[] = [];
  public descriptionVisible: Boolean = false;
  public showEditModal: Boolean = false;
  public showDeleteModal: Boolean = false;
  public showPolaroidModal: Boolean = false;
  public selectedImage: Image;
  public thumbnailOnMap = null;

  lat: Number = 52.467540;
  lng: Number = 16.927325;

  styles: google.maps.MapTypeStyle[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private journeysService: JourneysService,
    private router: Router
  ) {
    this.styles = mapStyles;

    this.activatedRoute.params.subscribe((params: Params) => {
      const journey_id = params['id'];

      this.imageService.getImagesByJourney(journey_id)
        .subscribe(images => this.images = images);

      this.journeysService.getJourneyById(journey_id)
        .subscribe(journey => this.journey = journey);
    });
  }

  ngOnInit() {
  }

  public toggleDescription(): void {
    this.descriptionVisible = !this.descriptionVisible;
  }

  public toggleEditModal(): void {
    this.showEditModal = !this.showEditModal;
  }

  public toggleDeleteModal(): void {
    this.showDeleteModal = !this.showDeleteModal;
  }

  public togglePolaroidModal(): void {
    this.showPolaroidModal = !this.showPolaroidModal;
  }

  public showPolaroid(image: Image): void {
    this.selectedImage = image;
    this.togglePolaroidModal();
  }

  public selectNextPolaroid(): void {
    const position = this.images.indexOf(this.selectedImage);

    if (position === this.images.length - 1) {
      this.selectedImage = this.images[0];
    } else {
      this.selectedImage = this.images[position + 1];
    }
  }

  public selectPreviousPolaroid(): void {
    const position = this.images.indexOf(this.selectedImage);

    if (position === 0) {
      this.selectedImage = this.images[this.images.length - 1];
    } else {
      this.selectedImage = this.images[position - 1];
    }
  }

  public removeImage(image): void {
    this.images.splice(this.images.indexOf(image), 1);
  }

  public deleteJourney(): void {
    this.journeysService.deleteJourney(this.journey._id)
    .subscribe(success => this.router.navigateByUrl('/journeys'));

    this.toggleDeleteModal();
  }

  public editJourney(form: NgForm) {
    const payload = {_id: this.journey._id, ...form.value };

    this.journeysService.editJourney(payload)
    .subscribe(success => this.journey = success.journey);
    this.toggleEditModal();
  }

  public getDownloadUrl(): void {
    this.journeysService.getJourneyImagesZipUrl(this.journey._id)
    .subscribe(data => {
      this.downloadURI(data.url, this.journey.title);
    });
  }

  public mouseOver(infoWindow, $event) {
    if (this.thumbnailOnMap !== null) {
      this.thumbnailOnMap.close();
    }

    this.thumbnailOnMap = infoWindow;
    infoWindow.open();
    }

  private convertStringToNumber(value: string): number {
    return +value;
  }

  private downloadURI(uri, name): void {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
