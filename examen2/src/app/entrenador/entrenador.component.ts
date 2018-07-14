import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';

import {  EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {

  constructor(private entrenadorService: EntrenadorService) {
  }

  ngOnInit() {
    this.getEntrenadores();
  }
  entrenadores : Entrenador[];
  getEntrenadores(): void {
    this.entrenadorService.getEntrenadores()
    .subscribe(entrenadores => this.entrenadores = entrenadores);
  }

}
