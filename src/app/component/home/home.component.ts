import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonaService } from '../../service/persona.service';
import { PersonaFormComponent } from '../persona-form/persona-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PersonaFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  showPersonaForm = false;

  openPersonaForm(){
     this.showPersonaForm = true;       
  }

 closePersonaForm(){
     this.showPersonaForm = false;       
  }

  dni!: number;
  personaEncontrada: any = null;
  errorDni!: string | number;
  constructor(private personaService: PersonaService){}

  onDniChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dni = Number(input.value);

    if(this.dni.toString().length >=5){
      this.buscarPersona();
    }
    
    console.log('DNI ingresado:', this.dni);
  }
  
  buscarPersona() {
  this.personaService.buscarPorDni(this.dni.toString()).subscribe({
    next:(persona) => { 
      this.personaEncontrada = persona;
      this.errorDni = 0;
      console.log('Persona encontrada:', persona);
      this.closePersonaForm();
    },
    error: () => {
      this.personaEncontrada = null;
      this.errorDni = 'Persona no encontrada';
    }
  });
}
}

