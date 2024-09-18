import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
  // providers: [EventoService] -- UMA DAS 3 FORMAS DE INJETAR
})
export class EventosComponent implements OnInit {

ngOnInit(): void {

}
}
