import { environment, URL } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { BookingRequest } from './../../models/booking-request';
import { Passenger } from './../../models/passenger';
import { Injectable } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderingService {
  private chosenFlight: Trip;
  private passenger: Passenger;

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

  public onChosenFlight(flight: Trip): void {
    this.chosenFlight = flight;
    this.navigateToOrderPage();
  }

  public onPassengerFormFilled(passenger: Passenger): void {
    this.passenger = passenger;
    this.orderFlight();
  }

  private orderFlight(): void {
    const bookingRequest = this.composeBookingRequest();
    // FIXME: uncomment later
    this.postBookingRequest(bookingRequest).subscribe(
      // (val: string) => { console.log('siema ', val); }
      this.navigateToTripSummary()
    );

    // FIXME: delete later
    // this.router.navigate(['/tickets'], { queryParams: this.composeQueryParams(5) });
  }

    // TODO: maybe pass in extras some id of tickets?
  private navigateToTripSummary(): (response: { tripId: string }) => void {
    return (response: { tripId: string }) => {
      const { tripId } = response;
      console.log('received code: ', tripId);
      this.router.navigate(['/tickets'], { queryParams: this.composeQueryParams(tripId) });
    };
  }


  private composeQueryParams(tripId: string): Params {
    return {
      code: tripId
    };
  }

  private postBookingRequest(bookingRequest: BookingRequest): Observable<{ tripId: string }> {
    return this.httpClient.post<{ tripId: string }>(
      URL + '/trips/createTrip',
      bookingRequest
    );
  }

  private composeBookingRequest(): BookingRequest {
    return {
      tripDto: this.chosenFlight,
      passengersDto: [this.passenger]
    };
  }

  private navigateToOrderPage(): void {
    this.router.navigate(['/booking/order']);
  }
}
