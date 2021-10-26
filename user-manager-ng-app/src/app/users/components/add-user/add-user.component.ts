import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  isSaved = false;

  // Step 1: Let's have the form tag equivalent in TS 
  addUserForm = new FormGroup({
    // Step 2: Have the form element equivalents in TS
    name: new FormControl('Arun', Validators.required), // Step 5: Let's work on form validations
    phone: new FormControl('1231231', [Validators.required]), // Refer TS for Step 6
    email: new FormControl('a@b.com', [Validators.required, Validators.email])
  }); // For Step 3: Refer Add user comp HTML 

  constructor(private userService: UserService) { // 1. connect with the service using DI

  }

  ngOnInit(): void {
  }

  handleAddUser():void {
    console.log('Submitting');
    
    //console.log(this.addUserForm); // the entire form state

    // Read form data here
    console.log(this.addUserForm.value);

    // 2. send the above data to the service
    this.userService.createUser(this.addUserForm.value)
      .subscribe( (res: any) => { // 3. get the response from service
        console.log(res);
        if(res && res.id == 11){
          this.isSaved = true;
        }
      });
  }

}
