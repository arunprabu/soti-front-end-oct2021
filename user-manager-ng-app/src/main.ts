// node_module imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// custom imports
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// ng app should be bootstrapped with a module -- AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
