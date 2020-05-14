import { Component, OnInit } from '@angular/core';
import { Airport } from './airport.type';
import { AirportService } from './airport.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {
  airports: Airport[];
  filteredAirports: Airport[] = [];
  filterParam: string;

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    if (!this.airports) {
      this.airportService.getAllAirports()
        .subscribe((airports: Airport[]) => { 
          this.airports = airports;
        });
    }
  }

  onFilter() {
    if (this.filterParam.length < 3) {
      return;
    }
    
    this.filteredAirports = this.airports.filter(
      ({ airportName, city, country, iata }) => (
        airportName.includes(this.filterParam) ||
        city.includes(this.filterParam) ||
        country.includes(this.filterParam) ||
        iata.includes(this.filterParam)
      )
    );
  }

}
