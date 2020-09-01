import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private error: any;

  constructor(private router: Router) { }

  public getErrorCause(): string {
    return JSON.stringify(this.error);
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
