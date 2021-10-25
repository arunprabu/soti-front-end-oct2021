import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  // inline template
  template: `
    <footer class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class="copyright">Copyright 2021  - Arun </p>
    </footer>
  `,
  // inline styles
  styles: [
    `
      .nav-link{
        background-color: yellow;
      }
      .copyright{
        color: green;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
