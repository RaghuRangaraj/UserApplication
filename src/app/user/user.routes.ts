import { Routes } from '@angular/router';
import { AddUserComponent } from './addUser/add.user.component';
import { UserComponent } from './user.component';
import { EditUserComponent } from './editUser/edit.user.component';

export const ROUTES: Routes = [
  { path: '', component: UserComponent},
  { path: 'addUser', component: AddUserComponent },
  { path: 'editUser/:id', component: EditUserComponent }
];
