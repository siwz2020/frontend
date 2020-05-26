export class SearchParams {
  oneWay: boolean;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  passengerNumber: number;
  tripClass: string;

  constructor() {
    this.oneWay = true;
    this.from = '';
    this.to = '';
    this.arrivalDate = '';
    this.departureDate = '';
    this.passengerNumber = 1;
    this.tripClass = 'economic';
  }
}
