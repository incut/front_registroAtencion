import { Component } from '@angular/core';
import { PersonaListComponent } from './component/persona-list/persona-list.component';
import { MotivoListComponent } from './component/motivo-list/motivo-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonaListComponent, MotivoListComponent],
  template: 
  `
    <h1>Método de listar personas registradas</h1>
    <app-persona-list></app-persona-list>
    <h1>Motivos registrados</h1>
    <app-motivo-list></app-motivo-list>
  `
})
export class AppComponent {}

//selector: 'app-root',
//selector: 'app-persona-list'
