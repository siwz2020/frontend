import { Airport } from './airport';
import { Airline } from './airline';

export interface Flight {
  flightId: number;
  airline: Airline;
  srcAirport: Airport;
  dstAirport: Airport;
}
