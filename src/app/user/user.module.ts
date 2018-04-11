import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './user.routes';
import { AddUserComponent } from './addUser/add.user.component';
import { UserComponent } from './user.component';
import { EditUserComponent } from './editUser/edit.user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  declarations: [AddUserComponent,
    UserComponent,
    EditUserComponent]
})
export class UserModule {
  public static routes = ROUTES;
}
