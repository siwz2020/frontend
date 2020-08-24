import { FlightRequestQueryParams } from './../../models/flight-request-query-params';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightFormBuilderService {

  constructor(private formBuilder: FormBuilder) { }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      sourceLocation: ['', Validators.required],
      destinationLocation: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      oneWay:  [true, Validators.required],
      passengersNumber: [1, Validators.required]
    });
  }

  public mapFormGroupToParams(form: FormGroup): FlightRequestQueryParams {
    return {
      departureDate: form.controls['departureDate'].value,
      sourceLocation: form.controls['sourceLocation'].value,
      arrivalDate: form.controls['arrivalDate'].value,
      destinationLocation: form.controls['destinationLocation'].value,
    };
  }
}
