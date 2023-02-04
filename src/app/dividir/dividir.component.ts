import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dividir',
  templateUrl: './dividir.component.html'
})
export class DividirComponent  {
  title = 'Dividir';
  value1:number = 0;
  value2:number = 0;
  result:number = 0;

  dividir():void{
    this.result = this.value1 / this.value2;
  }

  limpiar():void{
    this.result=0;
  }
}
