import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {} from '@types/googlemaps';

import { mapStyles } from './../shared/global/mapStyles';
import { ImageService } from './../shared/services/image.service';
import { JourneysService } from './../shared/services/journeys.service';
import { Journey } from './../shared/models/Journey';
import { Image } from './../shared/models/Image';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.less']
})
export class JourneyComponent implements OnInit {

  public journey: Journey = new Journey();
  public images: Image[] = [];
  public descriptionVisible: Boolean = false;
  lat: Number = 51.678418;
  lng: Number = 7.809007;
  styles: google.maps.MapTypeStyle[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private journeysService: JourneysService
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
    if (this.descriptionVisible) {
      this.descriptionVisible = false;
    } else {
      this.descriptionVisible = true;
    }
  }

  public removeImage(image): void {
    this.images.splice(this.images.indexOf(image), 1);
  }

  public toggleEditModal(): void {

  }

  public deleteJourney(): void {

  }
}
