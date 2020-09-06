import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private error: any;

  constructor(private router: Router) { }

  public getErrorCause(): HttpErrorResponse {
    return this.error;
  }

  public handleError(error: any): void {
    this.setErrorCause(error);
    this.navigateToErrorComponent();
  }


  private navigateToErrorComponent(): void {
    this.router.navigate(['/error']);
  }

  private setErrorCause(error: any): void {
    this.error = error;
  }
}
