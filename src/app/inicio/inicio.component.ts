import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private router : Router) { }
  image : Observable<any>; 

  ngOnInit() {
  }

  selectFile(event){
    console.log(event.target.files.length);
    this.convertBase64(event.target.files[0]);
    
  }

  convertBase64(file: File){
    const observable = new Observable((suscribe:Subscriber<any>)=>{
      this.readFile(file,suscribe);
    });
    observable.subscribe((d)=>{
      //console.log(d);
      this.image = d;
    },
    (error)=>{alert(error);}
    );
  }

  readFile(file: File ,suscri: Subscriber<any>){
    const fl = new FileReader();
    fl.readAsDataURL(file);

    fl.onload =()=>{
      suscri.next(fl.result);
      suscri.complete();
    }
    fl.onerror=(err)=>{
      suscri.error(err);
      suscri.complete();
    }
  }
}
