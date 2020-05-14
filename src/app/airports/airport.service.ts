import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport } from './airport.type';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AIRPORTS_URL } from 'src/environments/url';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  airportCache: Airport[];

  constructor(private httpClient: HttpClient) { }

  getAllAirports(): Observable<Airport[]> {
    if (!this.airportCache) {
      return this.httpClient.get<Airport[]>(AIRPORTS_URL).pipe(
        map((airports: Airport[]) => this.airportCache = airports)
      );
    } else {
      return of(this.airportCache);
    }
  }
}
