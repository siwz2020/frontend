import { SearchFlightService } from './../services/search-flight.service';
import { Observable } from 'rxjs';
import { AirportService } from './../services/airport.service';
import { SearchFlightFormBuilderService } from './../services/search-flight-form-builder.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Airport } from 'src/app/models/airport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  public readonly title = 'Dokąd teraz?';
  public readonly subtitle = 'Wypełnij formularz i znajdź idealną podróż';
  public form: FormGroup;
  public srcOptions: Observable<Airport[]>;

  constructor(
    private formBuilder: SearchFlightFormBuilderService,
    private airportService: AirportService,
    private router: Router,
    private searchFlightService: SearchFlightService) { }

  ngOnInit() {
    this.form = this.formBuilder.buildForm();
  }

  public getAutocompleteAirportsOptions($event: any): void {
    const property = $event.target.getAttribute('formControlName');
    this.srcOptions = this.airportService.getAirportsStartingWith(this.form.controls[property].value);
  }

  public onSubmit(): void {
    this.searchFlightService.fetchAvailableFlights(this.formBuilder.mapFormGroupToParams(this.form));
    this.router.navigate(['booking/flights']);
  }

}
