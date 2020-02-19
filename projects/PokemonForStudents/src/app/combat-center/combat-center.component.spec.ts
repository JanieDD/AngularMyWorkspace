import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatCenterComponent } from './combat-center.component';

describe('CombatCenterComponent', () => {
  let component: CombatCenterComponent;
  let fixture: ComponentFixture<CombatCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
