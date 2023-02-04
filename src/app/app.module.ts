import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumarComponent } from './sumar/sumar.component';
import { RestarComponent } from './restar/restar.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { DividirComponent } from './dividir/dividir.component';


@NgModule({
  declarations: [
    AppComponent,
    SumarComponent,
    RestarComponent,
    MultiplicarComponent,
    DividirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
