import { Ticket } from './../../models/ticket';
import { Trip } from './../../models/trip';
import { environment, URL } from './../../../environments/environment';
import { FlightRequestQueryParams } from './../../models/flight-request-query-params';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchFlightService {
  private foundTrips = new BehaviorSubject<Trip[]>([]);

  constructor(private httpClient: HttpClient) {}

  private readonly FLIGHTS_URL = URL + '/trips/findTrips';

  public fetchAvailableFlights(params: FlightRequestQueryParams): void {
    // TODO: delete mock later
    // this.foundTrips.next(this.returnMockedTrips());
    this.httpClient
      .get<[Trip[], Trip[]]>(this.FLIGHTS_URL, this.createHttpOptions(params))
      .subscribe(this.onTripsReceived());
  }

  public getFoundTrips(): Observable<Trip[]> {
    return this.foundTrips.asObservable();
  }

  private onTripsReceived(): (value: [Trip[], Trip[]]) => void {
    return (trips: [Trip[], Trip[]]) => {
      console.log('Received trips: ', trips);
      this.foundTrips.next(trips[0]);
    };
  }

  private createHttpOptions(params: FlightRequestQueryParams): object {
    return {
      params,
      responseType: 'json',
    };
  }

  // FIXME: delete later
  private returnMockedTrips(): Trip[] {
    return [
      {
        arrivalDate: '20/07/2020, 08:52',
        departureDate: '18/07/2020, 19:12',
        arrivalTime:  '19:12',
        departureTime:  '19:12',
        totalPrice: 421,
        arraysTicket: [
          {
            arrivalDate: '20/07/2020, 08:52',
            departureDate: '18/07/2020',
            arrivalTime:  '19:12',
            departureTime:  '19:12',
            flightDto: {
              airline: {
                code: 'LOT',
                name: 'Polskie linie lotnicze',
              },
              srcAirport: {
                city: 'Cracow',
                country: 'Poland',
                name: 'Balice',
                timezone: 1,
              },
              dstAirport: {
                city: 'Moscow',
                country: 'Poland',
                name: 'Puting airport',
                timezone: 3,
              },
              flightId: 5,
              seatNumber: 5
            },
            totalPrice: 421,
          },
        ],
      },
      {
        arrivalDate: '20/07/2020, 09:02',
        departureDate: '18/07/2020, 17:12',
        arrivalTime:  '19:12',
        departureTime:  '19:12',
        totalPrice: 250,
        arraysTicket: [
          {
            arrivalDate: '20/07/2020, 08:52',
            arrivalTime:  '19:12',
            departureTime:  '19:12',
            departureDate: '18/07/2020, 19:12',
            flightDto: {
              airline: {
                code: 'LUF',
                name: 'Lufthansaaa',
              },
              srcAirport: {
                city: 'Cracow',
                country: 'Poland',
                name: 'Balice',
                timezone: 1,
              },
              dstAirport: {
                city: 'Warsaw',
                country: 'Poland',
                name: 'JP2',
                timezone: 1
              },
              flightId: 2,
              seatNumber: 2
            },
            totalPrice: 122,
          },
          {
            arrivalDate: '20/07/2020, 08:52',
            departureDate: '18/07/2020, 19:12',
            arrivalTime:  '19:12',
            departureTime:  '19:12',
            flightDto: {
              airline: {
                code: 'WIZ',
                name: 'Wizzair',
              },
              srcAirport: {
                city: 'Warsaw',
                country: 'Poland',
                name: 'JP2',
                timezone: 1
              },
              dstAirport: {
                city: 'Moscow',
                country: 'Poland',
                name: 'Puting airport',
                timezone: 3
              },
              flightId: 6,
              seatNumber: 44
            },
            totalPrice: 128,
          }
        ]
      }
    ];
  }
}
