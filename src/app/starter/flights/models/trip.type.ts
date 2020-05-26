import { Ticket } from "src/app/trips/ticket.type";

export class Trip {
  tickets: Ticket[];
  departureDate: string;
  arrivalDate: string;
  totalPrice: number;
}