import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestObserverEmitterComponent } from './test-observer-emitter/test-observer-emitter.component';
import { TestObserverReceiverComponent } from './test-observer-receiver/test-observer-receiver.component';
import { TestObserverComponent } from '../test-observable/test-observer.component';



@NgModule({
  declarations: [
    TestObserverEmitterComponent,
    TestObserverReceiverComponent,
    TestObserverComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestObserverEmitterComponent,
    TestObserverReceiverComponent,
    TestObserverComponent
  ],
  entryComponents: [TestObserverComponent]
})
export class TestObservableModule { }
