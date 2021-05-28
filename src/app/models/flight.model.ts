export interface Flight {
  reservationNumber: number;
  departureTime: Date;
  returnTime: Date;
  passengers: number;
  bookedSeats: any;
  choosenSeats: string;
  originCity: string;
  originAlias: string;
  originCode: string;
  destinationCity: string;
  destinationAlias: string;
  destinationCode: string;
  isFlightDomestic: boolean;
  key: string;
}
