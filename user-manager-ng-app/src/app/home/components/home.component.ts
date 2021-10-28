import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
      <p>
        home works!
      </p>
  </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
