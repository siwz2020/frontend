import { Passenger } from './../../models/passenger';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderFormBuilderService {

  constructor(private fb: FormBuilder) { }

  public createPassengerForm(): FormGroup {
    return this.fb.group({
      firstname: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      pesel: new FormControl('', Validators.required),
      email: new FormControl(''),
    });
  }

  public mapFormGroupToPassenger(form: FormGroup): Passenger {
    return {
      firstname: form.controls['firstname'].value,
      surname: form.controls['surname'].value,
      dateOfBirth: form.controls['dateOfBirth'].value,
      pesel: form.controls['pesel'].value,
      phoneNumber: form.controls['phoneNumber'].value,
      email: form.controls['email'].value ? form.controls['email'].value : null
    };
  }
}
