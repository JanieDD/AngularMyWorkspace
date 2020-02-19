import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvilleComponent } from './myville.component';

describe('MyvilleComponent', () => {
  let component: MyvilleComponent;
  let fixture: ComponentFixture<MyvilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
