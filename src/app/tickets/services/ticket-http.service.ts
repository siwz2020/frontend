import { URL } from './../../../environments/environment';
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
    return this.httpClient.get<Trip>(this.TICKET_URL + `?code=${tripCode}`);
  }
}
