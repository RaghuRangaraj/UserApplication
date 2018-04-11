import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserDetails } from '../user.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit.user.component.html',
  styleUrls: ['./edit.user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private _userService: UsersService,
    private _router: Router,
    private _actRoute: ActivatedRoute) { }

  userDetails: UserDetails;
  id: string;
  public users: Array<UserDetails> = [];

  ngOnInit() {
    this._actRoute.params
    .subscribe(params => {
      this.id = params['id'];
      this.getUserDetails();
    });
  }

  getUserDetails() {
    this._userService.getUserData().subscribe((response: Array<UserDetails>) => {
      this.users = response;
      this.userDetails = this.users[this.id];
    }, (error: any) => {
      console.log('No Users found');
    });
  }

  saveUserData() {
    this._userService.editUserData(this.userDetails.id).subscribe((response: any) => {
      const self = this;
      const index = response.findIndex(function(item, i) {
        return item.id === self.users[i].id;
      });
      self.users[index] = this.userDetails;
      alert('updated user whose id is ' + this.id);
      this._router.navigate(['']);
    }, (error: any) => {
      console.log('Couldnt update user');
    });
  }

}
