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
      sourcePlace: this.extractPlace(trip.arraysTicket[0].flightDto.srcAirport),
      destinationPlace: this.extractPlace(trip.arraysTicket[trip.arraysTicket.length - 1].flightDto.dstAirport),
      numberOfTransfers: trip.arraysTicket.length - 1,
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
    return trip.arraysTicket.map((ticket: Ticket) => {
      return {
        srcPlace: this.extractPlace(ticket.flightDto.srcAirport),
        dstPlace: this.extractPlace(ticket.flightDto.dstAirport),
        airline: ticket.flightDto.airline.name,
        arrivalDate: ticket.arrivalDate,
        departureDate: ticket.departureDate
      } as IntermediateConnection;
    })
  }
}
