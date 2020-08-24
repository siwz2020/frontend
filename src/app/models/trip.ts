import { Ticket } from './ticket';

export interface Trip {
  tickets: Ticket[];
  departureDate: string;
  arrivalDate: string;
  totalPrice: number;
}
