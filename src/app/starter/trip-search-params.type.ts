import { TripClass } from "./trip-class.enum";

export class TripSearchParams {
  oneWay: boolean;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  passengerNumber: number;
  tripClass: TripClass
}
