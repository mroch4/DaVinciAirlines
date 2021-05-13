import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../app/material/material.module';

import { MainComponent } from './main/main.component';
import { FlightDataComponent } from './../../app/components/flight-data/flight-data.component';
import { SeatselectionComponent } from '../../app/components/seatselection/seatselection.component';
import { CarouselComponent } from '../../app/components/carousel/carousel.component';
import { CurrexchangeComponent } from '../../app/components/currexchange/currexchange.component';
import { CurrexDialogComponent } from '../../app/components/currexchange/currex-dialog/currex-dialog.component';
import { LoginComponent } from './login/login.component';
import { FlightsComponent } from './flights/flights.component';

@NgModule({
  declarations:
    [
      MainComponent,
      FlightDataComponent,
      SeatselectionComponent,
      CarouselComponent,
      CurrexchangeComponent,
      CurrexDialogComponent,
      LoginComponent,
      FlightsComponent
    ],
  imports:
    [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [],
})

export class ComponentsModule { }
