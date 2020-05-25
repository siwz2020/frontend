import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class SearchParams {
  oneWay: boolean;
  from: string;
  to: string;
  departureDate: NgbDateStruct;
  arrivalDate: NgbDateStruct;
  passengerNumber: number;
  tripClass: string;

  constructor() {
    this.oneWay = true;
    this.from = '';
    this.to = '';
    this.passengerNumber = 1;
    this.tripClass = 'economic';
  }
}
