import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent {
  subtitle: string;
  model: NgbDateStruct;
  date: { year: number, month: number };
  todayDate = new Date().toISOString().slice(0,10);
  nextDate = new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).toISOString().slice(0,10);

  constructor(
    private router: Router,
    private calendar: NgbCalendar) {
      this.subtitle = 'This is some text within a card block.';
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  onSubmit() {
    this.router.navigate(['starter/flights']);
  }

}
