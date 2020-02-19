import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TestService } from '../../test.service';
import { Observable, Subject } from 'rxjs'; 

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
 });

 //Constante pour tester que les abonnés reçoivent l'information en même temps
 const subject = new Subject<number>();

@Component({
  selector: 'app-test-observer-receiver',
  templateUrl: './test-observer-receiver.component.html',
  styleUrls: ['./test-observer-receiver.component.css']
 })


 
 export class TestObserverReceiverComponent implements OnInit {

  @Input() receiveFromBrother;
  dataReceived;

  constructor(private testService: TestService) {}
  ngOnInit() {
    // souscription a l'observable
/*     this.testService.getObservable().subscribe(value => {
      console.log("TEST getObservable subscribe value = ");
      console.log(value);
    });
    console.log('before');
    foo.subscribe(x => {
      console.log(x);
    });
    console.log('after'); */



    // Pour tester avec la constante que les abonnés sont syncronnes

/*     const subject = new Subject<number>();

   subject.subscribe({
     next: (v) => console.log(`observerA: ${v}`)
   });
   subject.subscribe({
     next: (v) => console.log(`observerB: ${v}`)
   });

   subject.next(1);
   subject.next(2);
*/

  } 

  //Pour faire le lien avec l'app parent et le frère emitter
  ngOnChanges(changes: SimpleChanges): void {

    this.dataReceived = changes.receiveFromBrother.currentValue;
    console.log("RECEIVER ngChanges changes = ");
    console.log(changes);
    console.log("RECEIVER ngChanges receiveFromBrother = ");
    console.log(changes.receiveFromBrother.currentValue);
  }
 

}
 

