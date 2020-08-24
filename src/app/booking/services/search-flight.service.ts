import { Ticket } from './../../models/ticket';
import { Trip } from './../../models/trip';
import { environment } from './../../../environments/environment';
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

  private readonly FLIGHTS_URL = environment.url + '/flights';

  public fetchAvailableFlights(params: FlightRequestQueryParams): void {
    // TODO: delete mock later
    this.foundTrips.next(this.returnMockedTrips());
    // this.httpClient
    //   .get<Trip[]>(this.FLIGHTS_URL, this.createHttpOptions(params))
    //   .subscribe(this.onTripsReceived());
  }

  public getFoundTrips(): Observable<Trip[]> {
    return this.foundTrips.asObservable();
  }

  private onTripsReceived(): (value: Trip[]) => void {
    return (trips: Trip[]) => {
      this.foundTrips.next(trips);
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
        totalPrice: 421,
        tickets: [
          {
            arrivalDate: '20/07/2020, 08:52',
            departureDate: '18/07/2020, 19:12',
            flight: {
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
            },
            totalPrice: 421,
          },
        ],
      },
      {
        arrivalDate: '20/07/2020, 09:02',
        departureDate: '18/07/2020, 17:12',
        totalPrice: 250,
        tickets: [
          {
            arrivalDate: '20/07/2020, 08:52',
            departureDate: '18/07/2020, 19:12',
            flight: {
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
            },
            totalPrice: 122,
          },
          {
            arrivalDate: '20/07/2020, 08:52',
            departureDate: '18/07/2020, 19:12',
            flight: {
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
            },
            totalPrice: 128,
          }
        ]
      }
    ];
  }
}
