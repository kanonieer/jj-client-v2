import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private journeysService: JourneysService
  ) {
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

  public toggleEditModal(): void {

  }

  public deleteJourney(): void {

  }
}
