import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { api } from './../global/variables';
import { handleError } from './../global/errorHandler';
import { StorageService } from './storage.service';
import { Resolve } from '@angular/router/src/interfaces';


@Injectable()
export class AuthService {

  constructor(
    private _http: Http,
    private storageService: StorageService,
    private router: Router
  ) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  public authFacebook(payload: any): Observable<any> {
    return this._http.post(api + '/facebookAuthorization', payload, this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }

  public signUp(payload: any): Observable<any> {
    return this._http.post(api + '/signup', JSON.stringify(payload), this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }

  public signIn(payload: any): Observable<any> {
    return this._http.post(api + '/login', JSON.stringify(payload), this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }

  public changeEmail(payload: any): Observable<any> {
    const access_token = this.storageService.get('token');

    return this._http.patch(api + '/email?access_token=' + access_token, JSON.stringify(payload), this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }

  public changePassword(payload: any): Observable<any> {
    const access_token = this.storageService.get('token');

    return this._http.patch(api + '/password?access_token=' + access_token, JSON.stringify(payload), this.options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }

  public logout(): void {
    this.storageService.remove('user_id');
    this.storageService.remove('token');
    this.router.navigateByUrl('');
    window.location.reload();
  }
}
