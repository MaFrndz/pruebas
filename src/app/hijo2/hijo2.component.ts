import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../servicios/global.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {

  
  constructor(private glob: GlobalService) { }

  mensaje =  this.glob.mensjae; 
  ngOnInit(): void {
  }

  btnMensaje(){
    this.mensaje = 'mensaje hijo 2'; 
    this.glob.mensjae = this.mensaje; 
    
  }

}
