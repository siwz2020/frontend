import { Trip } from "./trip.type";
import { Passenger } from "../passenger-details/passenger.type";

export class BookingRequest {
  chosenTrip: Trip;
  passengers: Passenger[];
}