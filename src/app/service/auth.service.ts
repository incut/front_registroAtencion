import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

interface LoginResponse {
  token: string;
  user: { id: number; username: string };
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<LoginResponse>(`${environment.api}/login/`, { username, password })
      .pipe(tap(res => localStorage.setItem(this.tokenKey, res.token)));
  }

    logout() {

      
      
      
      const token = this.getToken();
      return this.http
      .post(
        `${environment.api}/logout/`, {}, {headers: token ? { Authorization: `Token ${token}`} : {}
      })
      .pipe(
        tap(() => localStorage.removeItem(this.tokenKey)),
        catchError(() => of(null)),
            finalize(() => localStorage.removeItem(this.tokenKey))
    );
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}

