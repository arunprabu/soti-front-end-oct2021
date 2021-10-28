import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  sampleTxt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';

  today: Date = new Date();

  dummyTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae quae obcaecati numquam accusantium dicta';

  constructor() { }

  ngOnInit(): void {
  }

}
