import { Flight } from './flight';
export interface Ticket {
  flight: Flight;
  departureDate: string;
  arrivalDate: string;
  totalPrice: number;
}
