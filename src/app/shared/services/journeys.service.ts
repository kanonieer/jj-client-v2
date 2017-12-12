import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { handleError } from './../global/errorHandler';

import { StorageService } from './storage.service';
import { api } from './../global/variables';
import { Journey } from './../models/Journey';

@Injectable()
export class JourneysService {

  constructor(
      private _http: Http,
      private storageService: StorageService
    ) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  getJourneys(): Observable<Array<Journey>> {
    const access_token = this.storageService.get('token');
    const user_id = this.storageService.get('user_id');

    return this._http.get(api + '/users/' + user_id + '/journeys?access_token=' + access_token, this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }

  getJourneyById(journey_id: String): Observable<Journey> {
    const access_token = this.storageService.get('token');

    return this._http.get(api + '/journeys/' + journey_id + '?access_token=' + access_token, this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }

  deleteJourney(journey_id: String): Observable<any> {
    const access_token = this.storageService.get('token');

    return this._http.delete(api + '/journeys/' + journey_id + '?access_token=' + access_token, this.options)
    .map((response: Response) => response.json())
    .catch(handleError);
  }

  editJourney(journey: any): Observable<any> {
    const access_token = this.storageService.get('token');

    return this._http.patch(api + '/journeys/' + journey._id + '?access_token=' + access_token,
    JSON.stringify(journey), this.options)
    .map((response: Response) => response.json())
    .catch(handleError);
  }

  getJourneyImagesZipUrl(journey_id: String): Observable<any> {
    const access_token = this.storageService.get('token');

    return this._http.get(api + '/journeys/' + journey_id +  '/download?access_token=' + access_token, this.options)
    .map((response: Response) => response.json())
    .catch(handleError);
  }
}
