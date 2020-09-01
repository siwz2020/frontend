import { ErrorService } from './error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public error = '';

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.error = this.getErrorMessage();
  }

  private getErrorMessage(): string {
    return this.errorService.getErrorCause();
  }
}
