import { OrderingService } from './../services/ordering.service';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { OrderFormBuilderService } from './order-form-builder.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public passengersNumber: number;
  public passengerForm: FormArray;

  constructor(
    private orderFormBuilder: OrderFormBuilderService,
    private orderService: OrderingService) { }

  public ngOnInit(): void {
    this.passengersNumber = this.orderService.getPassengersNumber();
    this.initializePassengersForm();
  }

  public onSubmit(): void {
    // TODO: send final object (passenger + trip -> get id of trip -> can check trip in trip module)
    this.orderService.onPassengerFormFilled(
      this.orderFormBuilder.mapFormArrayToPassengers(this.passengerForm)
    );
  }

  private initializePassengersForm() {
    this.passengerForm = this.orderFormBuilder.createPassengerForm(this.passengersNumber);
  }
}
