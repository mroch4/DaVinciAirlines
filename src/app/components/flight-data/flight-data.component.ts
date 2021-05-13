import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FlightformService } from '../../services/flightform.service'

import * as airports from '../../../assets/data/airports.json';
import * as connections from '../../../assets/data/connections.json';

interface airport {
  airportId: number,
  country: string,
  city: string,
  alias: string,
  iatacode: string,
}

interface airportsGroup {
  disabled?: boolean,
  country: string,
  url: string,
  airports: airport[],
}

@Component({
  selector: 'app-flight-data',
  templateUrl: './flight-data.component.html',
  styleUrls: ['./flight-data.component.scss']
})

export class FlightDataComponent implements OnInit {

  constructor(
    private data: FlightformService,
    private router: Router
  ) { }

  // form controls

  flighForm = new FormGroup({
    journey: new FormControl(''),
    start: new FormControl('', [Validators.required]),
    end: new FormControl(''),
    origin: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
  })

  minDate: Date = new Date;

  journeys = [
    {
      key: 'Podróż w jedną stronę',
      checked: true,
    }, {
      key: 'Podróż w obie strony',
      checked: false,
    }
  ]

  changeJourneyType() {
    for (let i = 0; i < this.journeys.length; i++) {
      this.journeys[i].checked = !this.journeys[i].checked;
    }
  }

  // passenger a'la input

  passengers: number = 1

  addPassenger() {
    if (this.passengers < 9) {
      this.passengers++
    } else {
      return
    }
  }

  removePassenger() {
    if (this.passengers > 1) {
      this.passengers--
    } else {
      return
    }
  }

  // airports arrays & inputs

  airportsArray: airport[] = airports.airports;
  connectionsArray: any = connections.connections;
  destinationsArray: any = [];

  airportsGroups: airportsGroup[] = [
    {
      country: 'Polska',
      url: '../../../assets/flags/pl.png',
      airports: [
        this.airportsArray[0],
        this.airportsArray[1],
        this.airportsArray[2],
        this.airportsArray[3],
        this.airportsArray[4],
        this.airportsArray[5],
        this.airportsArray[6],
      ]
    },
    {
      country: 'Finlandia',
      url: '/assets/flags/fin.png',
      airports: [
        this.airportsArray[7],
      ]
    },
    {
      country: 'Francja',
      url: '/assets/flags/f.png',
      airports: [
        this.airportsArray[8],
        this.airportsArray[9],
      ]
    },
    {
      country: 'Izrael',
      url: '/assets/flags/il.png',
      airports: [
        this.airportsArray[10],
      ]
    },
    {
      country: 'Norwegia',
      url: '/assets/flags/n.png',
      airports: [
        this.airportsArray[11],
      ]
    },
    {
      country: 'Szwecja',
      url: '/assets/flags/s.png',
      airports: [
        this.airportsArray[12],
        this.airportsArray[13],
      ]
    },
    {
      country: 'Węgry',
      url: '/assets/flags/h.png',
      airports: [
        this.airportsArray[14],
      ]
    },
    {
      country: 'Włochy',
      url: '/assets/flags/i.png',
      airports: [
        this.airportsArray[15],
      ]
    }
  ];

  createDestinationArray() {
    this.destinationsArray = [];
    for (let i = 0; i < this.connectionsArray[this.flighForm.value.origin].destination.length; i++) {
      this.destinationsArray.push(this.airportsArray[this.connectionsArray[this.flighForm.value.origin].destination[i]]);
    }
  }

  swapLocation() {
    let x = this.airportsArray[this.flighForm.value.origin];
    let y = this.airportsArray[this.flighForm.value.destination];
    // console.log(y, x)
  }

  // collecting flight data

  flightData: any = [];
  isFlightDomestic: boolean = false;

  submit() {
    if (this.airportsArray[this.flighForm.value.origin].country === this.airportsArray[this.flighForm.value.destination].country) {
      this.isFlightDomestic = true;
    } else {
      this.isFlightDomestic = false;
    }

    this.flightData = [
      this.flighForm.value.start,
      this.flighForm.value.end,
      this.passengers,
      this.airportsArray[this.flighForm.value.origin].city,
      this.airportsArray[this.flighForm.value.origin].alias,
      this.airportsArray[this.flighForm.value.origin].iatacode,
      this.airportsArray[this.flighForm.value.destination].city,
      this.airportsArray[this.flighForm.value.destination].alias,
      this.airportsArray[this.flighForm.value.destination].iatacode,
      this.isFlightDomestic
    ];

    this.data.changeMessage(this.flightData);
    this.router.navigate(['seats']);
  }

  message: any;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
