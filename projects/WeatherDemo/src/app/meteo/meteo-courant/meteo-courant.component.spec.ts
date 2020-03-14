import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoCourantComponent } from './meteo-courant.component';

describe('MeteoCourantComponent', () => {
  let component: MeteoCourantComponent;
  let fixture: ComponentFixture<MeteoCourantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoCourantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoCourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
