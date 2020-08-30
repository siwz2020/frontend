import { Airport } from './airport';

export interface FlightRequestQueryParams {
  arrivalDate: string;
  departureDate: string;
  dstAirportId: number;
  passengerNumber: number;
  srcAirportId: number;
  twoTrip: boolean;
}
