import { Component, OnInit } from '@angular/core';

import { UserflightsService } from 'src/app/services/userflights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  constructor(
    private userFlightsService: UserflightsService
  ) { }

  remove(event: any){
    this.userFlightsService.removeFlight(event.target.id);
  }

  flights: any = [];

  ngOnInit() {
    this.userFlightsService.getFlights().subscribe(flights => this.flights = flights);
  }

}
