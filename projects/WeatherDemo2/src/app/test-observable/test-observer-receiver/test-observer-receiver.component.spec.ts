import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObserverReceiverComponent } from './test-observer-receiver.component';

describe('TestObserverReceiverComponent', () => {
  let component: TestObserverReceiverComponent;
  let fixture: ComponentFixture<TestObserverReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestObserverReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObserverReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
