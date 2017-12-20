import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Image } from '../models/Image';
import { ImageService } from './image.service';

@Injectable()
export class ImagesResolver implements Resolve<Image[]> {

  constructor(
    private router: Router,
    private imageService: ImageService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.imageService.getImagesByJourney(route.params.id);
  }
}
