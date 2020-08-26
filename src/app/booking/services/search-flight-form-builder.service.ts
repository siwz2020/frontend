import { AirportService } from './airport.service';
import { FlightRequestQueryParams } from './../../models/flight-request-query-params';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airport } from 'src/app/models/airport';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightFormBuilderService {

  private months = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
  };

  constructor(
    private formBuilder: FormBuilder,
    private airportService: AirportService) { }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      sourceLocation: ['', Validators.required],
      destinationLocation: ['', Validators.required],
      departureDateStart: ['', Validators.required],
      departureDateEnd: ['', Validators.required],
      // arrivalDate: ['', Validators.required],
      oneWay: [true, Validators.required],
      passengersNumber: [1, Validators.required],
      maxIntervalBetweenFlights: [8, [Validators.required, Validators.max(48), Validators.min(1)]],
      maxIntermediateFlights: [2, [Validators.required, Validators.max(4), Validators.min(0)]]
    });
  }

  public mapFormGroupToParams(form: FormGroup): FlightRequestQueryParams {
    return {
      srcAirportId: this.findAirportId(form.controls['sourceLocation'].value),
      dstAirportId: this.findAirportId(form.controls['destinationLocation'].value),
      maxChange: form.controls['maxIntermediateFlights'].value,
      minDepartureDate: this.parseDate(form.controls['departureDateStart'].value),
      maxDepartureDate: this.parseDate(form.controls['departureDateEnd'].value),
      maxTimeBreak: form.controls['maxIntervalBetweenFlights'].value
    };
  }

  private findAirportId(airportDn: string): number {

    return this.airportService.getAirports().find((airport: Airport) => airport.name.toUpperCase().includes(airportDn.toUpperCase().split(',')[0])).id;
  }

  private parseDate(date: string): string {
    let [ weekDay, month, day, year ] = date.toString().split(' ');
    month = this.months[month];
    return `${year}-${month}-${day}`;
  }
}
