import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { Token } from '@angular/compiler';
import { log } from 'console';
import { RouterLink, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
 /*   template: `
    <form (ngSubmit)="submit()">
      <input [(ngModel)]="username" name="username" placeholder="usuario" />
      <input [(ngModel)]="password" name="password" placeholder="password" type="password" />
      <button type="submit">Entrar</button>
    </form>
  `, */
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  username = '';
  password = '';


  constructor(private auth: AuthService, private router: Router) {}

submit() {
  // Es recomendable manejar el éxito o error del login
  this.auth.login(this.username, this.password).subscribe({
    next: () => this.router.navigate(['']), // Redirige tras éxito
    error: (err) => console.error('Error de login', err)
  });
}

callLogout() {
  // Corregido el cierre de paréntesis del navigate
  this.auth.logout().subscribe(() => {
    this.router.navigate(['/logout']);
    
  });
}
 }

