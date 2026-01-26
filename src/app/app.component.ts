import { Component } from '@angular/core';
import { PersonaListComponent } from './component/persona-list/persona-list.component';
import { MotivoListComponent } from './component/motivo-list/motivo-list.component';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: 
  `
   <h1>Gestión</h1>

    <button routerLink="/personas">Personas</button>
    <button routerLink="/motivos">Motivos</button>
    <button routerLink="/historial">Historial</button>


    <hr>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}

//selector: 'app-root',
//selector: 'app-persona-list'
