import { NgFor, NgForOf } from '@angular/common';
import { Historial } from '../../historial';
import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../service/historial.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-historial-list',
  standalone: true,
  imports: [NgFor,NgForOf, DatePipe],
  templateUrl: './historial-list.component.html',
  styleUrl: './historial-list.component.css'
})
export class HistorialListComponent implements OnInit{
  historiales : Historial [] = [];
  constructor (private historialService : HistorialService){}
  ngOnInit(): void {
    this.listHistoriales();
  }
  listHistoriales(){
    this.historialService.getHistorialList().subscribe(
      data=> {this.historiales = data
        console.log(this.historiales);
      }
    )
  }

}
