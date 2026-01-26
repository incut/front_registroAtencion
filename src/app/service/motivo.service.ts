import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Motivo } from '../motivo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotivoService {

  private api : string = 'http://localhost:8080/api/motivos';

  constructor(private http:HttpClient) { }
  //getMotivoList() conecta a la api y obtiene lista de motivos
    //la clase observable es un patron de diseño asincrónico
    getMotivoList():Observable<Motivo []>{
      return this.http.get<Motivo[]>(this.api);
  
    }
}
