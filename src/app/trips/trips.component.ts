import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  ticketRetrived = false;
  tripCode = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // get ticket based on code
    this.ticketRetrived = true;
  }

  onEdit() {
    // @TODO: implement
  }

  onDelete() {
    // @TODO: implement
    this.ticketRetrived = false;
  }
}
