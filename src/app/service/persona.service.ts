import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private api : string = 'http://localhost:8080/api/personas';

  constructor(private http:HttpClient) { }

  //getPersonaList() conecta a la api y obtiene lista de personas
  //la clase observable es un patron de diseño asincrónico
  getPersonaList():Observable<Persona []>{
    return this.http.get<Persona[]>(this.api);

  }
}
