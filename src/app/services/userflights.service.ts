import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class UserflightsService {

  private API_URL = '/userFlights';

  constructor(private db: AngularFireDatabase) { }

  getFlights(): Observable<Flight[]> {
    return this.db.list<Flight>(this.API_URL).snapshotChanges().pipe(map(response => response.map(flight => this.assignKey(flight))));
  }

  addFlight(flight: Flight) {
    return this.db.list<Flight>(this.API_URL).push(flight);
  }

  removeFlight(key: string){
    return this.db.object(`${this.API_URL}/${key}`).remove();
  }

  private assignKey(flight: SnapshotAction<any>) {
    return { ...flight.payload.val(), key: flight.key }
  }

}

