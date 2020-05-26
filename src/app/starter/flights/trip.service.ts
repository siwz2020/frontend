import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './models/trip.type';
import { TRIPS_URL } from 'src/environments/url';
import { SearchParams } from '../trip-search-params.type';
import { SearchQueryParams } from './search-query-params';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private httpClient: HttpClient) { }

  getRoutes = (searchParams: SearchParams): Observable<Trip[]> => {
    const searchQueryParams: SearchQueryParams = this.mapToQueryParams(searchParams);

    return this.executeGet(searchQueryParams);
  }

  private mapToQueryParams = (searchParams: SearchParams): SearchQueryParams => ({
    "arrival-date": searchParams.arrivalDate.toString(),
    "departure-date": searchParams.departureDate.toString(),
    "one-way": searchParams.oneWay.toString(),
    "trip-class": searchParams.tripClass.toString(),
    from: searchParams.from.toString(),
    to: searchParams.to.toString(),
    passengers: searchParams.passengerNumber.toString()
  });

  private executeGet = (tripParams: SearchQueryParams): Observable<Trip[]> => {
    const params: {} = Object.assign({}, tripParams)
    
    return this.httpClient.get<Trip[]>(TRIPS_URL, { params });
  }
}
