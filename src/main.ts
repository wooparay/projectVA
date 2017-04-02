import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// [step] load your target module (root of the app)
import { MainAppModule } from './va_client/main.app.module';

platformBrowserDynamic().bootstrapModule(MainAppModule);
