import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../models/trip.type';
import { Passenger } from './passenger.type';
import { HttpClient } from '@angular/common/http';
import { BOOKING_URL } from 'src/environments/url';
import { BookingRequest } from '../models/booking-request.type';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
  passengersNumber: number;
  bookedTripId: number;
  tripToBook: Trip;
  passengers: Passenger[] = [];
  booked = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.tripToBook = JSON.parse(params.trip);
      this.passengersNumber = JSON.parse(params.passengers);
      for (let i = 0; i < this.passengersNumber; i++) {
        this.passengers.push(new Passenger());
      }
    });
  }

  onBook = () => {
    const bookingRequest: BookingRequest = {
      chosenTrip: this.tripToBook,
      passengers: this.passengers
    };

    this.httpClient.post<number>(BOOKING_URL, { bookingRequest })
      .subscribe((id: number) => {
        this.booked = true;
        this.bookedTripId = id;
      });
  }

}
