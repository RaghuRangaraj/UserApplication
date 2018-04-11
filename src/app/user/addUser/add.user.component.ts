import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user.models';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add.user.component.html',
  styleUrls: ['./add.user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _userService: UsersService,
    private _router: Router) { }

  userDetails: any = {};
  public users: Array<UserDetails> = [];

  ngOnInit() {
  }

  addUserData() {
    this._userService.addUserData(this.userDetails).subscribe((response: any) => {
      this.users = response;
      this.users.push(this.userDetails);
      alert('New user added');
      this._router.navigate(['']);
    }, (error: any) => {
      console.log('No Users found');
    });
  }

}
