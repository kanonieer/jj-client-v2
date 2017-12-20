import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { api } from './../global/variables';
import { handleError } from './../global/errorHandler';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {

  constructor(
    private _http: Http,
    private storageService: StorageService
  ) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  public getProfile(): Observable<any>{
    const access_token = this.storageService.get('token');
    const user_id = this.storageService.get('user_id');

    return this._http.get(api + '/users/' + user_id + '?access_token=' + access_token, this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }

  public getStats(): Observable<any>{
    const access_token = this.storageService.get('token');
    const user_id = this.storageService.get('user_id');

    return this._http.get(api + '/users/' + user_id + '/getStats?access_token=' + access_token, this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }
}