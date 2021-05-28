import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../app/material/material.module';

import { CarouselComponent } from './carousel/carousel.component';
import { CurrexchangeComponent } from './currexchange/currexchange.component';
import { CurrexDialogComponent } from './currexchange/currex-dialog/currex-dialog.component';
import { FlightDataComponent } from './flight-data/flight-data.component';
import { FlightsComponent } from './flights/flights.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { WeatherComponent } from './weather/weather.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations:
    [
      CarouselComponent,
      CurrexchangeComponent,
      CurrexDialogComponent,
      FlightDataComponent,
      FlightsComponent,
      LoginComponent,
      MainComponent,
      SeatselectionComponent,
      WeatherComponent,
      Page404Component
    ],
  imports:
    [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MaterialModule
    ],
  exports: [],
})

export class ComponentsModule { }
