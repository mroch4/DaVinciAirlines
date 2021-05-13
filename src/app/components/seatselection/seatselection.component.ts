import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlightformService } from '../../services/flightform.service'

import * as boeingSeats from '../../../assets/data/boeingseats.json';
import * as embraerSeats from '../../../assets/data/embraerseats.json';

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.scss']
})
export class SeatselectionComponent implements OnInit {

  constructor(
    private data: FlightformService,
    private router: Router
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
    // console.log(this.chosenSeats, this.chosenAmount)
  }

  removeSeat(i: number) {
    this.chosenSeats.splice(i);
    this.chosenAmount = this.chosenSeats.length;
    // console.log(this.chosenSeats, this.chosenAmount)
  }

  // navigation

  edit() {
    this.router.navigate(['']);
  }

  submit() {
    this.router.navigate(['login'])
  }

  // receive message from flight component

  message: any = [];

  departureTime: Date = new Date;
  returnTime: Date = new Date;
  passengers: number = 0;
  originCity: string = '';
  originAlias: string = '';
  originCode: string = '';
  destinationCity: string = '';
  destinationAlias: string = '';
  destinationCode: string = '';
  isFlightDomestic: boolean = false;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.departureTime = this.message[0];
    this.returnTime = this.message[1];
    this.passengers = this.message[2];
    this.originCity = this.message[3];
    this.originAlias = this.message[4]
    this.originCode = this.message[5];
    this.destinationCity = this.message[6];
    this.destinationAlias = this.message[7];
    this.destinationCode = this.message[8];
    this.isFlightDomestic = this.message[9];
  }
}
