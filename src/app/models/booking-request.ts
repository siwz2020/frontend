import { Trip } from './trip';
import { Passenger } from './passenger';
export interface BookingRequest {
  passengersDto: Passenger[];
  tripDto: Trip;
}
