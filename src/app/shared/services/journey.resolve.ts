import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Journey } from '../models/Journey';
import { JourneysService } from './journeys.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JourneyResolver implements Resolve<Journey> {

  constructor(
    private router: Router,
    private journeysService: JourneysService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.journeysService.getJourneyById(route.params.id);
  }
}
