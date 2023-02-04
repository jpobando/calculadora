import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restar',
  templateUrl: './restar.component.html'
})
export class RestarComponent {

  title = 'Restar';
  value1:number = 0;
  value2:number = 0;
  result:number = 0;

  restar():void{
    this.result = this.value1 - this.value2;
  }

  limpiar():void{
    this.result=0;
  }

}
