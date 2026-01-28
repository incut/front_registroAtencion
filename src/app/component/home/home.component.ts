import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HistorialFormComponent } from '../historial-form/historial-form.component';
import { HistorialListComponent } from '../historial-list/historial-list.component';
import { PersonaFormComponent } from '../persona-form/persona-form.component';
import{Router} from '@angular/router'
import { MotivoFormComponent } from '../motivo-form/motivo-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HistorialFormComponent,
    HistorialListComponent,
    MotivoFormComponent,
    PersonaFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

activeView: 'historial' | 'persona' | 'motivo' | null = null;

  openHistorialForm(){
    this.activeView='historial';
  }
  openPersonaForm(){
    this.activeView='persona';

  }
  openMotivoForm(){
    this.activeView='motivo';
  }

  showForm = false;
  constructor(private router: Router){}

  goToNuevaPersona(){
    this.router.navigate(['/nueva-persona']);
  }

  goToMotivos(){
    this.router.navigate(['/nuevo-motivo']);
  }

  openForm(){
    this.showForm=true;
  }

  closeForm(){
    this.showForm=false;
  }
  
}
