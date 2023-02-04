import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html'
})
export class MultiplicarComponent {

  title = 'Multiplicar';
  value1:number = 0;
  value2:number = 0;
  result:number = 0;

  multiplicar():void{
    this.result = this.value1 * this.value2;
  }

  limpiar():void{
    this.result=0;
  }
}
