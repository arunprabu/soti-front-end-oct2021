import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userData: any;
  dupUserData: any;
  isUpdated = false;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Read url param
    let id = this.route.snapshot.paramMap.get('id');
    
    this.userService.getUserById(id)
      .subscribe( (res: any) => {
        console.log(res);
        this.userData = res;
      });
  }

  handleEditModalOpen(): void{
    this.dupUserData = { ...this.userData  }; 
  }

  handleUpdateUser(): void{
    console.log(this.dupUserData); // submittable formdata

    this.userService.updateUser(this.dupUserData)
      .subscribe( (res: any) => {
        console.log(res);
        if(res && res.id){
          this.isUpdated = true;
          this.userData = res;
        }
      });
  }

}
