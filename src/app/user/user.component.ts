import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UserDetails } from './user.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService: UsersService,
    private _router: Router) { }


  public users: Array<UserDetails> = [];
  public selectedRow: number;
  public selectedUserDetails: UserDetails;

  searchText: string;

  ngOnInit() {
    this._userService.getUserData().subscribe((response: Array<UserDetails>) => {
      this.users = response;
      console.log(this.users);
    }, (error: any) => {
      console.log('No Users found');
    });
  }

  selectedUser(index: number, user: UserDetails) {
    this.selectedRow = index;
    this.selectedUserDetails = user;
  }


  navigateToAdd() {
    this._router.navigate(['/addUser']);
  }

  navigateToEdit() {
    const id = this.selectedUserDetails.id;
    this._router.navigate(['/editUser/' + id]);
  }

  deleteSelectedUser() {
    this._userService.deleteUserData(this.selectedUserDetails.id).subscribe((response: any) => {
      console.log(response);
      const self = this;
      const index = response.findIndex(function(item, i) {
        return item.id === self.selectedUserDetails.id;
      });
      this.users.splice(index, 1);
      console.log(response);
      alert('deleted user whose id is ' + this.selectedUserDetails.id);
    }, (error: any) => {
      console.log('Couldnt Remove');
    });
  }

  findUserDetails() {
    this._userService.findUsers(this.searchText).subscribe((response: Array<UserDetails>) => {
      this.users = response;
      this.users = this.users.filter(x =>  x.id === this.searchText);
    });
  }

}
