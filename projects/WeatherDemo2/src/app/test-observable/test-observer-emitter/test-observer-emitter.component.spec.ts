import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObserverEmitterComponent } from './test-observer-emitter.component';

describe('TestObserverEmitterComponent', () => {
  let component: TestObserverEmitterComponent;
  let fixture: ComponentFixture<TestObserverEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestObserverEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObserverEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
