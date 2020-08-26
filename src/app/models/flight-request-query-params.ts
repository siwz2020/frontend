import { Airport } from './airport';

export interface FlightRequestQueryParams {
  srcAirportId: number;
  dstAirportId: number;
  maxChange: number;
  maxDepartureDate: string;
  maxTimeBreak: number;
  minDepartureDate: string;
}
