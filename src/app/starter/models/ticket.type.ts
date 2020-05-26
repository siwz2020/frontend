import { Flight } from "./flight.type";

export class Ticket {
  flight: Flight;
  departureDate: string;
  arrivalDate: string;
  totalPrice: number;
};