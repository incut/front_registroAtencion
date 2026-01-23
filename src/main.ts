import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PersonaListComponent } from './app/component/persona-list/persona-list.component';

bootstrapApplication(PersonaListComponent, appConfig)
  .catch((err) => console.error(err));
