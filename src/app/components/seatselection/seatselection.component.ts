import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FlightformService } from '../../services/flightform.service';
import { UserflightsService } from '../../services/userflights.service';

import * as embraerSeats from '../../../assets/data/embraerseats.json';
import * as boeingSeats from '../../../assets/data/boeingseats.json';

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.scss']
})
export class SeatselectionComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService,
    private data: FlightformService,
    private userFlightsService: UserflightsService
  ) { }

  // seat selection

  eSeats: any = embraerSeats.seats;
  bSeats: any = boeingSeats.seats;

  chosenAmount: number = 0;
  chosenSeats: any = [];

  chooseSeat(event: any) {
    if (this.chosenAmount < this.passengers) {
      this.chosenSeats.push(event.target.id);

      if (this.isFlightDomestic === true) {
        this.eSeats[event.target.alt].booked = true;
      } else if (this.isFlightDomestic === !true) {
        this.bSeats[event.target.alt].booked = true;
      }

      this.chosenAmount = this.chosenSeats.length;
    } else {
      alert('Wybrałeś już miejsca dla wszystkich pasażerów')
      return
    }
  }

  removeSeat(i: number) {
    this.chosenSeats.splice(i);
    this.chosenAmount = this.chosenSeats.length;
  }

  // navigation

  edit() {
    this.router.navigate(['']);
  }

  submit() {
    this.message.bookedSeats = this.chosenSeats;
    this.message.departureTime = this.departureTime.toJSON();
    if (this.message.returnTime) {
      this.message.returnTime = this.returnTime.toJSON();
    }

    if (this.authService.isloggedIn) {
      this.router.navigate(['myflights']);
      this.userFlightsService.addFlight(this.message)
    } else {
      this.router.navigate(['login']);
    }
  }

  // receive message from flight component

  message: any = [];

  reservationNumber: number = 0;

  departureTime: any;
  returnTime: any;

  passengers: number = 0;
  bookedSeats: string = '';

  originCity: string = '';
  originAlias: string = '';
  originCode: string = '';

  destinationCity: string = '';
  destinationAlias: string = '';
  destinationCode: string = '';

  isFlightDomestic: boolean = false;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message[0]);

    this.reservationNumber = this.message.reservationNumber;

    this.departureTime = this.message.departureTime;
    this.returnTime = this.message.returnTime;

    this.passengers = this.message.passengers;
    this.bookedSeats = this.message.bookedSeats;

    this.originCity = this.message.originCity;
    this.originAlias = this.message.originAlias;
    this.originCode = this.message.originCode;

    this.destinationCity = this.message.destinationCity;
    this.destinationAlias = this.message.destinationAlias;
    this.destinationCode = this.message.destinationCode;

    this.isFlightDomestic = this.message.isFlightDomestic;
  }
}
