import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDataComponent } from './flight-data.component';

describe('FlightDataComponent', () => {
  let component: FlightDataComponent;
  let fixture: ComponentFixture<FlightDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
