import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 1: Let's have the form tag equivalent in TS 
  addUserForm = new FormGroup({
    // Step 2: Have the form element equivalents in TS
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  }); // For Step 3: Refer Add user comp HTML 


  constructor() { }

  ngOnInit(): void {
  }

}
