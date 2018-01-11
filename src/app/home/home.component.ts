import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public isLogged: Boolean = false;

  constructor(private userService: UserService) {
    this.userService.$isLogged.subscribe(isLogged => this.isLogged = isLogged);
  }

  ngOnInit() {
  }
}
