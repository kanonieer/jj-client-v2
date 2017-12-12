import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private facebookService: FacebookService,
    private storageService: StorageService
  ) {
    const initParams: InitParams = {
      appId: '865241546949819',
      xfbml: true,
      version: 'v2.8'
    };

    facebookService.init(initParams);
  }

  ngOnInit() {
  }

  public register(form: NgForm) {
    console.log(form);
    const payload = form.value;
    this.authService.signUp(payload)
    .subscribe(success => {
      this.router.navigateByUrl('authorize');
      this.toastr.success('Account created!', 'Success');
    }, error => {
      console.log(error);
      this.toastr.error('Username already taken.', 'Error');
    });
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

  private navigateToHomePage(): void {
    this.router.navigateByUrl('journeys');
    window.location.reload();
  }
}
