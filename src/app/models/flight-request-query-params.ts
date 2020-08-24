import { Airport } from './airport';

export interface FlightRequestQueryParams {
  sourceLocation: Airport;
  destinationLocation: Airport;
  departureDate: string;
  arrivalDate: string;
  oneWay?: boolean;
  passengersNumber?: number;
}
