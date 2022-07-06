import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo:string = 'sin nombre';
  @Output() eventoCambioNombre = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.nombreHijo = 'nombre hijo';
    this.eventoCambioNombre.emit(this.nombreHijo);
  }

}
