import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObserverComponent } from './test-observer.component';

describe('TestObserverComponent', () => {
  let component: TestObserverComponent;
  let fixture: ComponentFixture<TestObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
