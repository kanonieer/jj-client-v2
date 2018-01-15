import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../shared/services/auth.service';
import { StorageService } from './../shared/services/storage.service';
import { ToastrService } from 'ngx-toastr';
import { FbService } from '../shared/services/fb.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public showForm: Boolean = true;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private fbService: FbService
  ) {
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
      this.userService.setIsLogged(true);
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
  }

  public navigateToRegister(): void {
    this.router.navigateByUrl('register');
  }

  public facebookAuthorization(): void {
    this.fbService.authenticate().then(fb => {
      const data = {
        user_id: this.storageService.get('user_id') || null,
        facebook_user_id: fb.facebook_user_id,
        facebook_token: fb.facebook_token
       };

       this.authService.authFacebook(data).subscribe(res => {
         this.storageService.set('fb_token', fb.facebook_token);
         this.storageService.set('token', res.data.access_token);
         this.storageService.set('user_id', res.data.user_id);
         this.navigateToHomePage();
       }, err => console.log(err));
    });
  }
}
