import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users.component';

// Feature Routing Config 
const userRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add', component: AddUserComponent },
  { path: ':id', component: UserDetailsComponent }, // URL Param is id
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes) // registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
