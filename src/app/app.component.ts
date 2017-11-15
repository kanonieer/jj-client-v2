import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name = 'Paweł';
  public navVisible: Boolean = false;

  constructor() {}

  public toggleNavbar() {
    if (this.navVisible) {
      this.navVisible = false;
    } else {
      this.navVisible = true;
    }
  }
}
