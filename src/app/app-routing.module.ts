import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';
import { FlightsComponent } from './components/flights/flights.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seats', component: SeatselectionComponent, canActivate: [AuthGuard] },
  { path: 'myflights', component: FlightsComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
