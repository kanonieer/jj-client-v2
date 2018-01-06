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
  public isLoading: Boolean = true;
  public sortDateReverse: Boolean = false;
  public sortTitleReverse: Boolean = false;

  constructor(private journeysService: JourneysService) {
    this.journeysService
    .getJourneys()
    .subscribe(journeys => {
      this.isLoading = false;
      this.journeys = journeys;
      this.journeysList = journeys;
     });
  }

  ngOnInit() {
  }

  public onSearch($event): void {
    this.journeysList = this.journeys.filter(journey => journey.title.toLowerCase().includes($event.target.value));
  }

  public sortByTitle(reverse: Boolean): void {
    this.journeysList = this.journeys.sort((a, b) => this.compareTitle(a, b, reverse));
    this.sortTitleReverse = !this.sortTitleReverse;
  }

  public sortByDate(reverse: Boolean): void {
    this.journeysList = this.journeys.sort((a, b) => this.compareDate(a, b, reverse));
    this.sortDateReverse = !this.sortDateReverse;
  }

  private compareTitle(a: Journey, b: Journey, reverse: Boolean) {
    if (reverse) {
      return (a.title <= b.title) ? 1 : 0;
    } else {
      return (a.title > b.title) ? 1 : 0;
    }
  }

  private compareDate(a: Journey, b: Journey, reverse: Boolean) {
    if (reverse) {
      return (a.date_start <= b.date_start) ? 1 : 0;
    } else {
      return (a.date_start > b.date_start) ? 1 : 0;
    }
  }
}
