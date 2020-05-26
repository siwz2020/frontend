import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchParams } from '../trip-search-params.type';
import { Trip } from '../models/trip.type';
import { TripService } from './trip.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  private searchParams = new SearchParams();
  trips: Trip[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchParams = JSON.parse(params.search);
      this.fetchTrips();
    });
  }

  private fetchTrips = () => {
    // this.tripService.getRoutes(this.searchParams)
    //   .subscribe((trips: Trip[]) => {
    //     this.trips = trips;
    //   });

    this.trips = this.mockSomeTrips();
  }

  onBook = (chosenTrip: Trip) => {
    const trip = JSON.stringify(chosenTrip);
    this.router.navigate(
      ['/starter/flights/book'],
      { queryParams: {
        trip,
        'passengers': JSON.stringify(this.searchParams.passengerNumber)
      }
     });
  }

  // @TODO: mock - delete later
  private mockSomeTrips = (): Trip[] => {
    const mockDirect: Trip = {
      departureDate: this.searchParams.departureDate,
      arrivalDate: this.searchParams.departureDate,
      totalPrice: 427.2,
      tickets: [
        {
          flight: {
            flightId: 4,
            airline: {
              code: 'LOT',
              name: 'Lot - Polskie linie lotnicze'
            },
            srcAirport: {
              iata: 'KRK',
              icao: 'KRKo',
              airportName: 'Kraków, Balice', 
              city: 'Cracow', 
              country: 'Poland', 
              timezone: 1
            },
            dstAirport: {
              iata: 'WAR',
              icao: 'WARo',
              airportName: 'Warszawa, Okecie', 
              city: 'Warsaw', 
              country: 'Poland', 
              timezone: 1
            }
          },
          departureDate: this.searchParams.departureDate,
          arrivalDate: this.searchParams.arrivalDate,
          totalPrice: 427.2
        }
      ]
    };

    const mockNotDirect: Trip = {
      departureDate: this.searchParams.departureDate,
      arrivalDate: this.searchParams.departureDate,
      totalPrice: 430,
      tickets: [
        {
          flight: {
            flightId: 8,
            airline: {
              code: 'WIZ',
              name: 'Wizzair'
            },
            srcAirport: {
              iata: 'KRK',
              icao: 'KRKo',
              airportName: 'Kraków, Balice', 
              city: 'Cracow', 
              country: 'Poland', 
              timezone: 1
            },
            dstAirport: {
              iata: 'KAT',
              icao: 'KATo',
              airportName: 'Katowice, Pyrzowice', 
              city: 'Katowice', 
              country: 'Poland', 
              timezone: 1
            }
          },
          departureDate: this.searchParams.departureDate,
          arrivalDate: this.searchParams.arrivalDate,
          totalPrice: 211
        },
        {
          flight: {
            flightId: 15,
            airline: {
              code: 'RYA',
              name: 'Ryanair'
            },
            srcAirport: {
              iata: 'KAT',
              icao: 'KATo',
              airportName: 'Katowice, Pyrzowice', 
              city: 'Katowice', 
              country: 'Poland', 
              timezone: 1
            },
            dstAirport: {
              iata: 'WAR',
              icao: 'WARo',
              airportName: 'Warszawa, Okecie', 
              city: 'Warsaw', 
              country: 'Poland', 
              timezone: 1
            }
          },
          departureDate: this.searchParams.departureDate,
          arrivalDate: this.searchParams.arrivalDate,
          totalPrice: 219
        }
      ]
    };

    return [mockDirect, mockNotDirect];
  }
}
