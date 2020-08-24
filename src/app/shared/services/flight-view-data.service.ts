import { Injectable } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { FlightViewData, IntermediateConnection } from 'src/app/booking/flights/flight/flight-view-data';
import { Ticket } from 'src/app/models/ticket';
import { Airport } from 'src/app/models/airport';

@Injectable({
  providedIn: 'root'
})
export class TripViewDataService {
  constructor() { }

  public toViewData(trip: Trip): FlightViewData {
    return {
      sourcePlace: this.extractPlace(trip.tickets[0].flight.srcAirport),
      destinationPlace: this.extractPlace(trip.tickets[trip.tickets.length - 1].flight.dstAirport),
      numberOfTransfers: trip.tickets.length - 1,
      price: trip.totalPrice,
      arrivalDate: trip.arrivalDate,
      departureDate: trip.departureDate,
      flights: this.extractIntermediateFlights(trip)
    }
  }

  private extractPlace(airport: Airport): string {
    return airport.name + ', '
      + airport.city + ', '
      + airport.country;
  }

  private extractIntermediateFlights(trip: Trip): IntermediateConnection[] {
    return trip.tickets.map((ticket: Ticket) => {
      return {
        srcPlace: this.extractPlace(ticket.flight.srcAirport),
        dstPlace: this.extractPlace(ticket.flight.dstAirport),
        airline: ticket.flight.airline.name,
        arrivalDate: ticket.arrivalDate,
        departureDate: ticket.departureDate
      } as IntermediateConnection;
    })
  }
}
