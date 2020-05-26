import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
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

  arrivalDateStruct: NgbDateStruct;
  departureDateStruct: NgbDateStruct;

  constructor(
    private router: Router,
    private calendar: NgbCalendar) {
      this.subtitle = 'Wypełnij poniższy formularz...';
      this.trip.departureDate = this.todayDate;
      this.trip.arrivalDate = this.nextDate;
  }

  onDateChange = () => {
    this.trip.arrivalDate = this.formatter.format(this.arrivalDateStruct);
    this.trip.departureDate = this.formatter.format(this.departureDateStruct);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  onSubmit() {
    const search = JSON.stringify(this.trip);
    this.router.navigate(
      ['starter/flights'], 
      { queryParams: { search }}
    );
  }

}
