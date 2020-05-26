import { Airport } from "src/app/airports/airport.type";
import { Airline } from "./airline.type";

export class Flight {
  flightId: number;
  airline: Airline;
  srcAirport: Airport;
  dstAirport: Airport;
};
