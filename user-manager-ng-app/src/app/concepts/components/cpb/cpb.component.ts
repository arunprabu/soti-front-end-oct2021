import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div>
      <p>Age is {{age}}</p>
    </div>
  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: creating a variable and making it as custom propetry 
  @Input() age = 20;  //@Input() will make the variable as custom property

  // Refer concepts.comp.html for step 2

  constructor() { }

  ngOnInit(): void {
  }

}
