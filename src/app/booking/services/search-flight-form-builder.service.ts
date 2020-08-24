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
      departureDateStart: form.controls['departureDateStart'].value,
      departureDateEnd: form.controls['departureDateEnd'].value,
      sourceLocation: form.controls['sourceLocation'].value,
      arrivalDateStart: form.controls['arrivalDateStart']?.value,
      arrivalDateEnd: form.controls['arrivalDateEnd']?.value,
      destinationLocation: form.controls['destinationLocation'].value,
      maxIntermediateFlights: form.controls['maxIntermediateFlights'].value,
      maxIntervalBetweenFlights: form.controls['maxIntervalBetweenFlights'].value
    };
  }
}
