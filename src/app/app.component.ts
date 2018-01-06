import { Component, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { StorageService } from './shared/services/storage.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnChanges {
  public isLogged: Boolean = false;
  public navVisible: Boolean = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private userService: UserService
  ) {
    this.userService.setIsLogged(!!this.storageService.get('user_id'));
    this.userService.$isLogged.subscribe(isLogged => this.isLogged = isLogged);
  }

  ngOnChanges(): void {
  }

  public toggleNavbar() {
    if (this.navVisible) {
      this.navVisible = false;
    } else {
      this.navVisible = true;
    }
  }

  public logout(): void {
    this.authService.logout();
  }
}
