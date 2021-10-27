import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: User[] = [];

  constructor( private userService: UserService) {  // 1. connect with service
    console.log("Inside Constructor");
  }

  ngOnInit(): void { // Lifecycle hook
    console.log("Inside ngOnInit");
    // this will be called once the comp comes into view.
    // this is the ideal place for you to send ajax calls

    // 2. send the request to the service 
    this.userService.getUsers()
      .subscribe( (res: User[]) => { // 3. get the resp from the service
        console.log(res);
        this.userList = res;
      });
  }

  ngOnDestroy():void{
    // called when the comp is going out of the view.
    console.log('Into Destroy');
    // ideal place for you unsubscribe, clear the data, clear the timeout, clear the intervals

    if(this.userList && this.userList.length > 0){
      this.userList.length = 0;
    }
  }


}
