import { TripViewDataService } from './../../shared/services/flight-view-data.service';
import { FlightViewData } from './../../booking/flights/flight/flight-view-data';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnChanges {
  @Input() ticket: Trip;
  public viewData: FlightViewData;

  constructor(private viewDataService: TripViewDataService) { }

  ngOnChanges(): void {
    this.mapTicketToViewData();
  }

  private mapTicketToViewData(): void {
    this.viewData = this.viewDataService.toViewData(this.ticket);
  }

}
