import { Passenger } from './../../models/passenger';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderFormBuilderService {
  private readonly MONTHS = {
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
  constructor(private fb: FormBuilder) { }

  public createPassengerForm(passengerNumber: number): FormArray {
    const form = new FormArray([]);
    for (let i = 0; i < passengerNumber; i++) {
      form.push(new FormGroup({
          firstname: new FormControl('', Validators.required),
          surname: new FormControl('', Validators.required),
          dateOfBirth: new FormControl('', Validators.required),
          phoneNumber: new FormControl('', Validators.required),
          pesel: new FormControl('', Validators.required),
          email: new FormControl('')
        }));
    }

    return form;
  }

  public mapFormArrayToPassengers(form: FormArray): Passenger[] {
    const passengers: Passenger[] = [];
    for (let i = 0; i < form.length; i++) {
      passengers.push({
          firstName: form.at(i).get('firstname').value,
          surname: form.at(i).get('surname').value,
          dateOfBirth: this.parseDate(form.at(i).get('dateOfBirth').value),
          pesel: form.at(i).get('pesel').value,
          phoneNumber: form.at(i).get('phoneNumber').value,
          email: form.at(i).get('email').value ? form.at(i).get('email').value : null
      });
    }
    return passengers;

    // return {
    //   firstName: form.controls['firstname'].value,
    //   surname: form.controls['surname'].value,
    //   dateOfBirth: this.parseDate(form.controls['dateOfBirth'].value),
    //   pesel: form.controls['pesel'].value,
    //   phoneNumber: form.controls['phoneNumber'].value,
    //   email: form.controls['email'].value ? form.controls['email'].value : null
    // };
  }

  private parseDate(date: string): string {
    let [ weekDay, month, day, year ] = date.toString().split(' ');
    month = this.MONTHS[month];
    return `${year}-${month}-${day}`;
  }
}
