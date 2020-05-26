import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateFormatter } from '../date-formatter';
import { SearchParams } from '../trip-search-params.type';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  private formatter = new DateFormatter();
  private searchParams = new SearchParams();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchParams = JSON.parse(params.search);

      console.log(this.searchParams);
    });
  }

  private fetchRoutes = () => {

  }
}
