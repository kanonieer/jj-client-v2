import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './../shared/services/auth.service';
import { StorageService } from './../shared/services/storage.service';
import { UserService } from '../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FbService } from '../shared/services/fb.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  public showChangeEmailModal: Boolean = false;
  public showChangePasswordModal: Boolean = false;
  public showAddLocalAuthenticationModal: Boolean = false;
  public user: any;
  public stats: any;
  public hasLocal: Boolean;
  public hasFacebook: Boolean;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private userService: UserService,
    private toastr: ToastrService,
    private fbService: FbService
  ) {
    this.updateProfile();
    this.userService.getStats().subscribe(res => this.stats = res.stats);
  }

  ngOnInit() {
  }

  public toggleChangeEmail(): void {
    this.showChangeEmailModal = !this.showChangeEmailModal;
  }

  public toggleChangePassword(): void {
    this.showChangePasswordModal = !this.showChangePasswordModal;
  }

  public toggleAddLocalAuthentication(): void {
    this.showAddLocalAuthenticationModal = !this.showAddLocalAuthenticationModal;
  }

  private updateProfile(): void {
    this.userService.getProfile()
    .subscribe(res => {
      this.user = res.user;
      this.hasFacebook = !!this.user.facebook;
      this.hasLocal = !!this.user.local;
    });
  }

  public changeEmail(form: NgForm): void {
    this.authService.changeEmail({form: form.value})
       .subscribe(res => {
         this.toastr.success(res.message, 'Success');
         this.updateProfile();
        }, error => this.toastr.error(error, 'Error'));
    this.toggleChangeEmail();
  }

  public changePassword(form: NgForm): void {
    this.authService.changePassword({form: form.value})
      .subscribe(res => {
        this.toastr.success(res.message, 'Success');
        this.updateProfile();
      }, error => this.toastr.error(error, 'Error'));
    this.toggleChangePassword();
  }

  public addFacebook(): void {
    this.fbService.authenticate().then(fb => {
      const data = {
        user_id: this.storageService.get('user_id'),
        facebook_user_id: fb.facebook_user_id,
        facebook_token: fb.facebook_token
       };

      this.authService.addFacebookAuth(data).subscribe(res => {
        this.storageService.set('fb_token', fb.facebook_token);
        this.toastr.success(res.message, 'Success');
        this.updateProfile();
      }, error => this.toastr.error(error, 'Error'));
    });
  }

  public removeFacebook(): void {
    this.authService.removeFacebookAuth().subscribe(res => {
      this.toastr.success(res.message, 'Success');
      this.updateProfile();
    }, error => this.toastr.error(error, 'Error'));
  }

  public addLocalAuthentication(form: NgForm): void {
    this.authService.addLocalAuth(form.value).subscribe(res => {
      this.toastr.success(res.message, 'Success');
      this.updateProfile();
    }, error => this.toastr.error(error, 'Error'));
    this.toggleAddLocalAuthentication();
  }

  public removeLocal(): void {
    this.authService.removeLocalAuth().subscribe(res => {
      this.toastr.success(res.message, 'Success');
      this.updateProfile();
    }, error => this.toastr.error(error, 'Error'));
  }
}
