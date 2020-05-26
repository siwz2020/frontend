import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchParams } from '../trip-search-params.type';
import { Trip } from './models/trip.type';
import { TripService } from './trip.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  private searchParams = new SearchParams();
  trips: Trip[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchParams = JSON.parse(params.search);
      this.fetchTrips();
    });
  }

  private fetchTrips = () => {
    this.tripService.getRoutes(this.searchParams)
      .subscribe((trips: Trip[]) => {
        this.trips = trips;
      });
  }
}
