import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  public counter :number = 1

  increment():void {
    this.counter++
  }

  decrement():void{
    if( this.counter <=  0) return
    this.counter --
  }


  reset():void{
    this.counter = 0
  }
}
