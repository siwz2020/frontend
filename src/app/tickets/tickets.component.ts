import { ActivatedRoute, Params } from '@angular/router';
import { TicketHttpService } from './services/ticket-http.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from '../models/trip';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  public tripCodeSearchQuery = '';
  public ticket: Trip;
  private isTicketFound: boolean;

  constructor(
    private ticketHttp: TicketHttpService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  public onSearch(): void {
    this.fetchTrip();
  }

  public shouldDisplayTicketDetails(): boolean {
    return this.isTicketFound;
  }

  private fetchTrip(): void {
    this.ticketHttp.searchForTrip(this.tripCodeSearchQuery).pipe(take(1)).subscribe(
      this.onFoundTicket(),
      this.onFailedFetchedTicket()
    )
  }

  private subscribeToRouteParams() {
    this.route.queryParams.pipe(take(1)).subscribe(this.searchForReservedTripBasedOnQueryParams());
  }

  private searchForReservedTripBasedOnQueryParams(): (params: Params) => void {
    return (params: Params) => {
      this.extractTripCodeFromUrl(params);
      if (!this.tripCodeSearchQuery) { return; }
      this.fetchTrip();
    };
  }

  private extractTripCodeFromUrl(params: Params): void {
    this.tripCodeSearchQuery = params['tripId'] ?? '';
  }

  private onFoundTicket(): (value: Trip) => void {
    return (trip: Trip) => {
      this.ticket = trip;
      this.onSuccessfullyFetchedTicket();
    };
  }

  private onFailedFetchedTicket(): (error: any) => void {
    return (error) => {
      console.error(error);
      this.manageFlagOnFailure();
    };
  }

  private manageFlagOnFailure() {
    this.isTicketFound = false;
  }

  private onSuccessfullyFetchedTicket(): void {
    this.isTicketFound = true;
  }
}
