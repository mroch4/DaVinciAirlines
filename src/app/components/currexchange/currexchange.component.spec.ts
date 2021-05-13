import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrexchangeComponent } from './currexchange.component';

describe('CurrexchangeComponent', () => {
  let component: CurrexchangeComponent;
  let fixture: ComponentFixture<CurrexchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrexchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
