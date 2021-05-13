import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrexDialogComponent } from './currex-dialog.component';

describe('CurrexDialogComponent', () => {
  let component: CurrexDialogComponent;
  let fixture: ComponentFixture<CurrexDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrexDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrexDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
