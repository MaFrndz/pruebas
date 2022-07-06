import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import {Routes, RouterModule} from '@angular/router';
import { Prueba1Component } from './prueba1/prueba1.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


const appRoutes: Routes = [
  {path: 'inicio', component : InicioComponent},
  {path: '', component : InicioComponent},
  {path: 'prueba1', component : Prueba1Component}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Prueba1Component, 
  ],
  imports: [
    MatSliderModule,
    FormsModule ,
    HttpClientModule,
    BrowserModule,
    
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
