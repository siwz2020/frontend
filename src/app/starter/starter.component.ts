import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SearchParams } from './trip-search-params.type';
import { DateFormatter } from './date-formatter';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent {
  trip = new SearchParams();
  private formatter = new DateFormatter();

  subtitle: string;
  model: NgbDateStruct;
  date: { year: number, month: number };
  todayDate = new Date().toISOString().slice(0,10);
  nextDate = new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).toISOString().slice(0,10);

  constructor(
    private router: Router,
    private calendar: NgbCalendar) {
      this.subtitle = 'Wypełnij poniższy formularz...';
      this.trip.departureDate = this.formatter.parse(this.todayDate);
      this.trip.arrivalDate = this.formatter.parse(this.nextDate);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  onSubmit() {
    const {
      oneWay,
      from,
      to,
      departureDate,
      arrivalDate,
      passengerNumber,
      tripClass
    } = this.trip;

    const depDate = this.formatter.format(departureDate);
    const arrDate = this.formatter.format(arrivalDate);

    this.router.navigate(
      ['starter/flights'], 
      { queryParams: { 
        oneWay,
        from,
        to,
        departureDate: depDate,
        arrivalDate: arrDate,
        passengerNumber,
        tripClass
      }}
    );
  }

}
