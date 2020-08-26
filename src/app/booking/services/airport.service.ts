import { environment, URL } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Airport } from './../../models/airport';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private airports: Airport[];

  constructor(
    private httpClient: HttpClient
  ) {
    this.fetchAirports();
  }

  public getAirports(): Airport[] {
    return this.airports;
  }

  public getAirportsStartingWith(expression: string): Observable<Airport[]> {
    return of(this.airports.filter(this.filterAirportsBy(expression))).pipe(delay(300));
  }

  private filterAirportsBy(expression: string): (value: Airport, index: number, array: Airport[]) => boolean {
    return (airport: Airport) => {
      expression = expression.toUpperCase();
      return airport.city.toUpperCase().includes(expression)
        || airport.country.toUpperCase().includes(expression)
        || airport.name.toUpperCase().includes(expression);
    };
  }

  private fetchAirports(): void {
    // this.airports = this.mockAirports();
    // FIXME: Uncomment 

    this.httpClient.get<Airport[]>(URL + '/airports', { headers: {
      'Content-Type': 'application/json'
    }}).subscribe(
      (airports: Airport[]) => { this.airports = airports; }
    );
  }

  private mockAirports(): Airport[] {
    return [
      {
        city: 'Cracow',
        country: 'Poland',
        name: 'Balice',
        timezone: 1
      },
      {
        city: 'Warsaw',
        country: 'Poland',
        name: 'JP2',
        timezone: 1
      },
      {
        city: 'Moscow',
        country: 'Poland',
        name: 'Puting airport',
        timezone: 3
      },
      {
        city: 'Mielec',
        country: 'Poland',
        name: 'xd',
        timezone: 1
      }
    ]
  }
}
