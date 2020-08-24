import { environment } from './../../../environments/environment';
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
    // this.postBookingRequest(bookingRequest).subscribe(
    //   this.navigateToTripSummary()
    // );

    // FIXME: delete later
    this.router.navigate(['/tickets'], { queryParams: this.composeQueryParams(5) });
  }

    // TODO: maybe pass in extras some id of tickets?
  private navigateToTripSummary(): (value: number) => void {
    return (tripId: number) => {
      this.router.navigate(['/tickets'], { queryParams: this.composeQueryParams(tripId) });
    };
  }


  private composeQueryParams(tripId: number): Params {
    return {
      tripId
    };
  }

  private postBookingRequest(bookingRequest: BookingRequest): Observable<number> {
    return this.httpClient.post<number>(
      environment.url + '/order',
      bookingRequest
    );
  }

  private composeBookingRequest(): BookingRequest {
    return {
      chosenTrip: this.chosenFlight,
      passenger: this.passenger
    };
  }

  private navigateToOrderPage(): void {
    this.router.navigate(['/booking/order']);
  }
}
