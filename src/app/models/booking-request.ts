import { Trip } from './trip';
import { Passenger } from './passenger';
export interface BookingRequest {
  // FIXME: probably in the future this will be array of passenger
  //   TODO: but chosenTrip will be also array?
  passengersDto: Passenger[];
  chosenTrip: Trip;
}
