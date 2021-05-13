import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './components/flights/flights.component';
import { LoginComponent } from './components/login/login.component';

import { MainComponent } from './components/main/main.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: MainComponent },
  { path: 'seats', component: SeatselectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myflights', component: FlightsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
