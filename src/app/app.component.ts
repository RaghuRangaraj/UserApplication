import { Component, OnInit } from '@angular/core';
import { UserDetails } from './user/user.models';
import { UsersService } from './user/users.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  userDetails: UserDetails;

  constructor(
    private _userService: UsersService) { }

  ngOnInit() {
  }
}
