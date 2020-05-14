import { Component, OnInit, Input } from '@angular/core';
import { Airport } from '../airport.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() airport: Airport;

  cardImageUrl = `https://picsum.photos/300?random=${Math.floor(Math.random() * 500)}`

  constructor() { }

  ngOnInit(): void {
    console.log(this.airport.airportName);
  }

}
