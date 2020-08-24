import { environment } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Injectable({
  providedIn: 'root',
})
export class TicketHttpService {
  private readonly TICKET_URL = environment.url + '/trips';

  constructor(private httpClient: HttpClient) {}

  public searchForTrip(tripCode: string): Observable<Trip> {
    // FIXME: uncomment later
    // return this.httpClient.get<Trip>(this.TICKET_URL + `/${tripCode}`);
    // TODO: delete later
    switch (tripCode) {
      case '4':
        return of(this.returnTripMockWithIdEq4());
      case '5':
        return of(this.returnTripMockWithIdEq5());
      case '6':
        return of(this.returnTripMockWithIdEq6());
      default:
        console.error(`No trip with id: ${tripCode}`);
    }
  }

  // TODO: delete later
  private returnTripMockWithIdEq4(): Trip {
    return {
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
    };
  }

  // TODO: delete later
  private returnTripMockWithIdEq6(): Trip {
    return {
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
              timezone: 1,
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
              timezone: 1,
            },
            dstAirport: {
              city: 'Moscow',
              country: 'Poland',
              name: 'Puting airport',
              timezone: 3,
            },
            flightId: 6,
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
      totalPrice: 421,
      tickets: [
        {
          arrivalDate: '20/07/2020, 08:52',
          departureDate: '18/07/2020, 19:12',
          flight: {
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
              timezone: 1,
            },
            dstAirport: {
              city: 'Moscow',
              country: 'Poland',
              name: 'Just reserved!',
              timezone: 3,
            },
            flightId: 6,
          },
          totalPrice: 128,
        },
      ],
    };
  }
}
