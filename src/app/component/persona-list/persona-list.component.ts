import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Persona';
import { PersonaService } from '../../service/persona.service';
import { NgFor, NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

//decordaror de componente con propiedades
@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './persona-list.component.html',
  styleUrl: './persona-list.component.css'
})
//OnInit (y los métodos dentro) correrá cada vez que inicie el componente que lo contenga.
export class PersonaListComponent implements OnInit {

  personas : Persona [] = [];

  constructor(private personaService : PersonaService){}
  ngOnInit(): void {
    this.listPersonas();
  }
listPersonas(){
  this.personaService.getPersonaList().subscribe(
    data => { this.personas = data
      console.log(this.personas);
      }
  );
}}

