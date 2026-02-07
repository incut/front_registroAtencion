import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/auth.interceptor'; // Asegúrate que la ruta sea correcta
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // Un solo provideHttpClient con la configuración de interceptores
    provideHttpClient(
      withInterceptors([authInterceptor]) 
    ),
  ]
}).catch((err) => console.error(err));

/*
bootstrapApplication(PersonaListComponent, appConfig)
  .catch((err) => console.error(err));*/
