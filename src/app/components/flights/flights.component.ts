import { Component, OnInit } from '@angular/core';

import * as flights from '../../../dva/assets/data/myflights.json';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  constructor() { }

  flights = flights.userFlights;

  ngOnInit(): void {
  }

}
