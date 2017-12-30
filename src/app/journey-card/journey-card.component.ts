import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Journey } from './../shared/models/Journey';

@Component({
  selector: 'app-journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.less']
})
export class JourneyCardComponent implements OnInit {

  @Input() public journey: Journey;
  public imageSize = 400;
  private mobileSize = 768;

  constructor(private router: Router) {
    this.adjustSize();
  }

  ngOnInit() {
    this.adjustSize();
  }

  public navigateToJourney() {
    this.router.navigateByUrl('journeys/' + this.journey._id);
  }

  private adjustSize() {
    this.imageSize = (window.innerWidth < this.mobileSize) ? 300 : 400;
  }
}
