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
  public maxDateForBirthDate: Date;

  constructor(
    private orderFormBuilder: OrderFormBuilderService,
    private orderService: OrderingService) { }

  public ngOnInit(): void {
    this.passengersNumber = this.orderService.getPassengersNumber();
    this.initializePassengersForm();
    this.maxDateForBirthDate = this.orderFormBuilder.getMaxDateForBirthDate();
  }

  public onSubmit(): void {
    this.orderService.onPassengerFormFilled(
      this.orderFormBuilder.mapFormArrayToPassengers(this.passengerForm)
    );
  }

  private initializePassengersForm() {
    this.passengerForm = this.orderFormBuilder.createPassengerForm(this.passengersNumber);
  }
}
