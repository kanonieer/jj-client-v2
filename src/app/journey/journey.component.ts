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

  lat: Number = 52.467540;
  lng: Number = 16.927325;
  lat2: Number = 52.467940;
  lng2: Number = 16.927925;

  points = [
    {
      longitude: 16.927325,
      latitude: 52.467540
    },
    {
      longitude: 16.937325,
      latitude: 52.477540
    },
    {
      longitude: 16.917325,
      latitude: 52.487540
    }
  ]
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
