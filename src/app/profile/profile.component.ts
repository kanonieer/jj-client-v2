import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

import { AuthService } from './../shared/services/auth.service';
import { StorageService } from './../shared/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  public showChangeEmailModal: Boolean = false;
  public showChangePasswordModal: Boolean = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private facebookService: FacebookService
  ) { }

  ngOnInit() {
  }

  public toggleChangeEmail(): void {
    this.showChangeEmailModal = !this.showChangeEmailModal;
  }

  public toggleChangePassword(): void {
    this.showChangePasswordModal = !this.showChangePasswordModal;
  }

  public changeEmail(form: NgForm): void {
    this.authService.changeEmail({form: form.value})
       .subscribe(data => console.log(data));
    this.toggleChangeEmail();
  }

  public changePassword(form: NgForm): void {
    this.authService.changePassword({form: form.value})
      .subscribe(data => console.log(data));
    this.toggleChangePassword();
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
        console.log(res)
      }, err => console.log(err));
    })
    .catch((error: any) => console.error(error));
  }
}
