import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button type="button" (click)="handleSendData()">Send Data to Parent Comp</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Have the data in a variable 
  private profileName = "Arun"; // Let's prepare to send this data to the parent comp 

  // Step 2: Creating an obj of EventEmitter. 
  @Output() profileLoaded = new EventEmitter(); // Step 3: @Output() - Making it as custom event

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData(){
    console.log('Will send the data soon');
    // Step 3: Emitting the custom event thru program
    this.profileLoaded.emit(this.profileName); // sending the data
    // step 4: Handle the emitted custom event in concepts.comp.html 
  }
}
