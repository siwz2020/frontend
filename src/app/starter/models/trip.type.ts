import { Ticket } from './ticket.type';

export class Trip {
  tickets: Ticket[];
  departureDate: string;
  arrivalDate: string;
  totalPrice: number;
}
