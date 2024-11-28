import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes-contactos',
  templateUrl: './solicitudes-contactos.component.html',
  styleUrls: ['./solicitudes-contactos.component.css']
})
export class SolicitudesContactosComponent implements OnInit {
  solicitudes = [
    { nombre: 'Juan Pérez', correo: 'juan@example.com', mensaje: 'Necesito información' },
    { nombre: 'Ana Gómez', correo: 'ana@example.com', mensaje: 'Consulta sobre precios' }
  ];

  constructor() {}

  ngOnInit(): void {}
}


