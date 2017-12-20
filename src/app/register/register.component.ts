import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../shared/services/storage.service';
import { FbService } from '../shared/services/fb.service';

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
    private storageService: StorageService,
    private fbService: FbService
  ) {}

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

  private navigateToHomePage(): void {
    this.router.navigateByUrl('journeys');
    window.location.reload();
  }
}
