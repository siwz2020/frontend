import { environment, URL } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Injectable({
  providedIn: 'root',
})
export class TicketHttpService {
  private readonly TICKET_URL = URL + '/trips/findOneTrip';

  constructor(private httpClient: HttpClient) {}

  public searchForTrip(tripCode: string): Observable<Trip> {
    // FIXME: uncomment later
    return this.httpClient.get<Trip>(this.TICKET_URL + `?code=${tripCode}`);
    // TODO: delete later
    // switch (tripCode) {
    //   case '4':
    //     return of(this.returnTripMockWithIdEq4());
    //   case '5':\
    //     return of(this.returnTripMockWithIdEq5());
    //   case '6':
    //     return of(this.returnTripMockWithIdEq6());
    //   default:
    //     console.error(`No trip with id: ${tripCode}`);
    // }
  }

  // TODO: delete later
  private returnTripMockWithIdEq4(): Trip {
    return {
      arrivalDate: '20/07/2020, 08:52',
      departureDate: '18/07/2020, 19:12',
      totalPrice: 421,
      arrivalTime: '19:12',
      departureTime: '12:15',
      arraysTicket: [
        {
          arrivalDate: '20/07/2020, 08:52',
          departureDate: '18/07/2020, 19:12',
          arrivalTime: '19:12',
          departureTime: '12:15',
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
            seatNumber: 23
          },
          totalPrice: 421,
        },
      ],
    };
  }

  // TODO: delete later
  private returnTripMockWithIdEq6(): Trip {
    return {
      arrivalDate: '20/07/2020, 09:02',
      departureDate: '18/07/2020, 17:12',
      arrivalTime: '19:12',
      departureTime: '12:15',
      totalPrice: 250,
      arraysTicket: [
        {
          arrivalDate: '20/07/2020, 08:52',
          departureDate: '18/07/2020, 19:12',
          arrivalTime: '19:12',
          departureTime: '12:15',
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
              timezone: 1,
            },
            flightId: 2,
            seatNumber: 23
          },
          totalPrice: 122
        },
        {
          arrivalDate: '20/07/2020, 08:52',
          departureDate: '18/07/2020, 19:12',
          arrivalTime: '19:12',
          departureTime: '12:15',
          flightDto: {
            airline: {
              code: 'WIZ',
              name: 'Wizzair',
            },
            srcAirport: {
              city: 'Warsaw',
              country: 'Poland',
              name: 'JP2',
              timezone: 1,
            },
            dstAirport: {
              city: 'Moscow',
              country: 'Poland',
              name: 'Puting airport',
              timezone: 3,
            },
            flightId: 6,
            seatNumber: 23
          },
          totalPrice: 128,
        },
      ],
    };
  }

  // TODO: delete later
  private returnTripMockWithIdEq5(): Trip {
    return {
      arrivalDate: '20/07/2020, 09:02',
      departureDate: '18/07/2020, 17:12',
      arrivalTime: '09:02',
      departureTime: '17:12',
      totalPrice: 421,
      arraysTicket: [
        {
          arrivalDate: '20/07/2020, 08:52',
          departureDate: '18/07/2020, 19:12',
          arrivalTime: '09:02',
          departureTime: '17:12',
          flightDto: {
            airline: {
              code: 'LUF',
              name: 'Zarezerwowany',
            },
            srcAirport: {
              city: 'Cracow',
              country: 'Poland',
              name: 'Z',
              timezone: 1,
            },
            dstAirport: {
              city: 'Warsaw',
              country: 'Poland',
              name: 'JP2',
              timezone: 1,
            },
            flightId: 2,
            seatNumber: 23
          },
          totalPrice: 122,
        },
        {
          arrivalDate: '20/07/2020, 08:52',
          departureDate: '18/07/2020, 19:12',
          arrivalTime: '09:02',
          departureTime: '17:12',
          flightDto: {
            airline: {
              code: 'WIZ',
              name: 'Wizzair',
            },
            srcAirport: {
              city: 'Warsaw',
              country: 'Poland',
              name: 'JP2',
              timezone: 1,
            },
            dstAirport: {
              city: 'Moscow',
              country: 'Poland',
              name: 'Just reserved!',
              timezone: 3,
            },
            flightId: 6,
            seatNumber: 44
          },
          totalPrice: 128,
        },
      ],
    };
  }
}
