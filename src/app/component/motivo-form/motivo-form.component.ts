import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MotivoService } from '../../service/motivo.service';

@Component({
  selector: 'app-motivo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './motivo-form.component.html',
  styleUrls: ['./motivo-form.component.css']
})
export class MotivoFormComponent {

  motivoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private motivoService: MotivoService,
    private router: Router
  ) {
    this.motivoForm = this.fb.group({
      motivo: ['', Validators.required]
    });
  }

  submit() {
    if (this.motivoForm.valid) {
      this.motivoService.createMotivo(this.motivoForm.value).subscribe(() => {
        alert('Motivo creado con éxito');
        this.router.navigate(['/motivos']);
      });
    } else {
      alert('Complete el campo motivo');
    }
  }
}

