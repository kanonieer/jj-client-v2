import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { Observable } from 'rxjs/Observable';
import { config } from './../global/config';

@Injectable()
export class FbService {

  constructor(private facebookService: FacebookService) {
    const initParams: InitParams = {
      appId: config.facebook.appId,
      xfbml: config.facebook.xfbml,
      version: config.facebook.version
    };

    facebookService.init(initParams);
  }

  public authenticate(): Promise<any> {
    return this.facebookService.login()
    .then((response: LoginResponse) => {
      const facebook_token = response.authResponse.accessToken;
      const facebook_user_id = response.authResponse.userID;

      return { facebook_token, facebook_user_id };
    })
    .catch((error: any) => console.error(error));
  }
}
