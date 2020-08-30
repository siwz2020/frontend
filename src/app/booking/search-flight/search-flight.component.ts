import { SearchFlightService } from './../services/search-flight.service';
import { Observable, of } from 'rxjs';
import { AirportService } from './../services/airport.service';
import { SearchFlightFormBuilderService } from './../services/search-flight-form-builder.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Airport } from 'src/app/models/airport';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  public readonly title = 'Dokąd teraz?';
  public readonly subtitle = 'Wypełnij formularz i znajdź idealną podróż';
  public form: FormGroup;
  public autocompleteOptions: Observable<Airport[]>;

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
    if (this.shouldClearAutocomplete(property)) {
      this.clearAutocompleteOptions();
      return;
    }

    this.autocompleteOptions = this.airportService.getAirportsStartingWith(this.form.controls[property].value)
      .pipe(
        map(this.formBuilder.disableOptionChosenInAnotherLocationField(property, this.form)));
  }

  private shouldClearAutocomplete(property: string): boolean {
    return !this.form.controls[property].value;
  }

  public onSubmit(): void {
    this.searchFlightService.fetchAvailableFlights(this.formBuilder.mapFormGroupToParams(this.form));
    this.router.navigate(['booking/flights']);
  }

  public clearAutocompleteOptions(): void {
    this.autocompleteOptions = of([]);
  }

}
