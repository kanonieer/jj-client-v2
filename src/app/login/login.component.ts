import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

import { AuthService } from './../shared/services/auth.service';
import { StorageService } from './../shared/services/storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public showForm: Boolean = true;;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private facebookService: FacebookService,
    private toastr: ToastrService
  ) {
    const initParams: InitParams = {
      appId: '865241546949819',
      xfbml: true,
      version: 'v2.8'
    };

    facebookService.init(initParams);
    if (!!this.storageService.get('user_id')) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
   }

  ngOnInit() {
  }

  public login(loginForm: NgForm): void {
    const payload = loginForm.form.value;

    this.authService
    .signIn(payload)
    .subscribe((response) => {
      this.storeUser(response);
      this.toastr.success('Signed in!', 'Success');
      this.navigateToHomePage();
    }, error => {
      console.log(error);
      this.toastr.error('Provided wrong user or password', 'Error');
      loginForm.reset();
    });
  }

  private storeUser(response): void {
    const { token, user: { _id } } = response;

    this.storageService.set('token', token);
    this.storageService.set('user_id', _id);
  }

  private navigateToHomePage(): void {
    this.router.navigateByUrl('journeys');
    window.location.reload();
  }

  public navigateToRegister(): void {
    this.router.navigateByUrl('register');
  }

  public facebookAuthorization(): void {
    this.facebookService.login()
    .then((response: LoginResponse) => {
      const fb_token = response.authResponse.accessToken;
      const data = {
        user_id: this.storageService.get('user_id') || null,
        facebook_user_id: response.authResponse.userID,
        token: fb_token
       };

      this.storageService.set('fb_token', fb_token);
      this.authService.authFacebook(data).subscribe(res => {
        this.storageService.set('token', res.data.access_token);
        this.storageService.set('user_id', res.data.payload_user_id);
        this.navigateToHomePage();
      }, err => console.log(err));
    })
    .catch((error: any) => console.error(error));
  }
}
