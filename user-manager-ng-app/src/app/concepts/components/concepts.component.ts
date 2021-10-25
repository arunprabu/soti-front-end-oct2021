import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public variables
  // string interpolation related
  appName = "User Management App";
  teamSize = 20;

  // prop binding related
  companyName = "SOTI";

  // two way binding 
  courseName = "Angular";

  // cpb related
  myAge = 100;

  // ceb related
  dataReceivedFromChildComp = '';

  // directives related
  isLoggedIn = false;
  skillList: Array<string> = [ "html", "css", "js", "ts", "ng"];

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related 
  handleClickMe(event: any){
    console.log(event);
    event.target.innerText = "Clicked";
    alert("clicked");
  }

  // Step 6 of CEB - handler for emitted custom event
  handleProfileLoaded(event: any){
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }
}
