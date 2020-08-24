import { Component, OnInit } from '@angular/core';
import { SearchFlightService } from '../services/search-flight.service';
import { OrderingService } from '../services/ordering.service';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  public flights: Trip[];

  constructor(
    private searchFlightService: SearchFlightService,
    private orderingService: OrderingService) { }

  ngOnInit(): void {
    this.getFlights();
  }

  public onFlightSelection(chosenFlight: Trip): void {
    this.orderingService.onChosenFlight(chosenFlight);
  }

  private getFlights(): void {
    this.searchFlightService.getFoundTrips().subscribe(
      (flights) => {
        this.flights = flights;
      }
    );
  }
}
