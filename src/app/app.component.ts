import { Component } from '@angular/core';
import { PersonaListComponent } from './component/persona-list/persona-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonaListComponent],
  template: `
    <h1>Método de listar personas registradas</h1>
    <app-persona-list></app-persona-list>
  `
})
export class AppComponent {}

//selector: 'app-root',
//selector: 'app-persona-list'
