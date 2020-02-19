import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyweatherComponent } from './myweather.component';

describe('MyweatherComponent', () => {
  let component: MyweatherComponent;
  let fixture: ComponentFixture<MyweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
