import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // inline template
  template: `
    <footer class="text-center">
      <hr>
      <p>Copyright 2021  - Arun </p>
    </footer>
  `,
  // inline styles
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
