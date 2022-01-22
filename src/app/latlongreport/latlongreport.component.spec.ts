import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatlongreportComponent } from './latlongreport.component';

describe('LatlongreportComponent', () => {
  let component: LatlongreportComponent;
  let fixture: ComponentFixture<LatlongreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatlongreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatlongreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
