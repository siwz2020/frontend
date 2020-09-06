import { Passenger } from './../../models/passenger';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';

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
          firstname: new FormControl('', this.getValidatorsForName()),
          surname: new FormControl('', this.getValidatorsForName()),
          dateOfBirth: new FormControl('', Validators.required),
          phoneNumber: new FormControl('', this.getValidatorsForPhoneNumber()),
          pesel: new FormControl('', this.getValidatorsForPesel()),
          email: new FormControl('', this.getValidatorsForEmail())
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
  }

  public getMaxDateForBirthDate(): Date {
    const date = new Date();
    return new Date(date.getFullYear() - 2, date.getMonth(), date.getDay());
  }

  private getValidatorsForEmail() {
    return [Validators.required, Validators.email];
  }

  private getValidatorsForPesel() {
    return [Validators.required];
  }

  private getValidatorsForName(): Array<ValidatorFn> {
    return [Validators.required, Validators.minLength(2), Validators.pattern(/[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/)];
  }

  private getValidatorsForPhoneNumber(): Array<ValidatorFn> {
    return [Validators.required, Validators.maxLength(9), Validators.minLength(9)];
  }

  private parseDate(date: string): string {
    let [ weekDay, month, day, year ] = date.toString().split(' ');
    month = this.MONTHS[month];
    return `${year}-${month}-${day}`;
  }
}
