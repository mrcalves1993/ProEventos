import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';


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
