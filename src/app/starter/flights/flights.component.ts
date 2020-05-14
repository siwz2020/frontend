import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Passenger } from './passenger.type';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
// @TODO: extract it to the proper file
  passengersNumber: number;
  passengers: Passenger[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.passengersNumber = params['passengersNumber'];
      console.log(this.passengers);
    });    
  }

  onChange() {
    console.log(this.passengers);
  }
}
