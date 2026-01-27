import { Component, OnInit } from '@angular/core';
import { Motivo } from '../../motivo';
import { MotivoService } from '../../service/motivo.service';
import {NgFor, NgForOf} from '@angular/common'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


//decordaror de componente con propiedades
@Component({
  selector: 'app-motivo-list',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './motivo-list.component.html',
  styleUrl: './motivo-list.component.css'
})
//OnInit (y los métodos dentro) correrá cada vez que inicie el componente que lo contenga.

export class MotivoListComponent implements OnInit {

  motivos : Motivo [] = [];
  constructor (private motivoService : MotivoService){}
  ngOnInit(): void {
    this.listMotivos();
  }
  listMotivos(){
    this.motivoService.getMotivoList().subscribe(
      data=> {this.motivos = data
         console.log(this.motivos);
      }
    )
  }
}
