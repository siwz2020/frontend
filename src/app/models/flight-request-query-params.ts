import { Airport } from './airport';

export interface FlightRequestQueryParams {
  sourceLocation: Airport;
  destinationLocation: Airport;
  departureDateStart: string;
  departureDateEnd: string;
  arrivalDateStart?: string;
  arrivalDateEnd?: string;
  oneWay?: boolean;
  passengersNumber?: number;
  maxIntervalBetweenFlights: number;
  maxIntermediateFlights: number;
}
