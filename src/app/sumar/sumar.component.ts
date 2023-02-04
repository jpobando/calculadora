import { Component } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html'
})
export class SumarComponent  {

  title = 'Sumar';
  value1:number = 0;
  value2:number = 0;
  result:number = 0;

  sumar():void{
    this.result = this.value1 + this.value2;
  }

  limpiar():void{
    this.result=0;
  }

}
