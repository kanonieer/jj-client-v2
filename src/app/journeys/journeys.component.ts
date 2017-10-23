import { Component, OnInit } from '@angular/core';

import { JourneysService } from './../shared/services/journeys.service';
import { Journey } from './../shared/models/Journey';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.less']
})
export class JourneysComponent implements OnInit {
  public journeys: Journey[] = [];
  public journeysList: Journey[] = [];

  constructor(private journeysService: JourneysService) {
    this.journeysService
    .getJourneys()
    .subscribe(journeys => {
      this.journeys = journeys;
      this.journeysList = journeys;
     });
  }

  ngOnInit() {
  }

  private onSearch($event): void {
    this.journeysList = this.journeys.filter(journey => journey.title.includes($event.target.value));
  }
}
