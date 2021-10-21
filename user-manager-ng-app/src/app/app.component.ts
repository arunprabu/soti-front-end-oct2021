import { Component, ViewEncapsulation } from '@angular/core';

// Decorator 
// ties html, scss, ts together
@Component({
  selector: 'app-root', // exposes the whole comp in an element selector -- app-root - mandatory
  templateUrl: './app.component.html', // html -- only one template should be present -- mandatory
  styleUrls: ['./app.component.scss'] // styles -- can be many and optional
})
export class AppComponent {
  // ts 
  title = 'user-manager-ng-app';
}
