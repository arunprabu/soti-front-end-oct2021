import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList: any[] = [];

  constructor( private userService: UserService) {  // 1. connect with service
    console.log("Inside Constructor");
  }

  ngOnInit(): void { // Lifecycle hook
    console.log("Inside ngOnInit");
    // this will be called once the comp comes into view.
    // this is the ideal place for you to send ajax calls

    // 2. send the request to the service 
    this.userService.getUsers()
      .subscribe( (res: any) => { // 3. get the resp from the service
        console.log(res);
        this.userList = res;
      });
  }

}
