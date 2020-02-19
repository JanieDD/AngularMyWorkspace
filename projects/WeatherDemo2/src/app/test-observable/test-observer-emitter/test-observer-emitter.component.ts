import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observer-emitter',
  templateUrl: './test-observer-emitter.component.html',
  styleUrls: ['./test-observer-emitter.component.css']
})



export class TestObserverEmitterComponent implements OnInit {

  visible: boolean = true;
  @Output() sendToBrother: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log("EMITTER this.visible = ");
    console.log(this.visible);

    console.log("EMITTER this.sendToBrother = ");
    console.log(this.sendToBrother);
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.sendToBrother.emit(this.visible);
    }, 10000);
    setTimeout(() => {
      this.sendToBrother.emit(false);
    }, 10000);
    
 
  }
 

}
