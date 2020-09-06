import { ErrorService } from './error.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public error: HttpErrorResponse;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.error = this.getErrorMessage();
  }

  private getErrorMessage(): HttpErrorResponse {
    return this.errorService.getErrorCause();
  }
}
