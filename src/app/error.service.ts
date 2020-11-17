import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorService {

  errorStatus: any;

  constructor(
  ) {
    this.errorStatus = '';
  }

  /**
   * For errohandling of error coming from API
   * @param error Actual Error
   */
  errorHandler(error: HttpErrorResponse, router) {
    this.errorStatus = error.status;
    return throwError(error || 'Server Error');
  }
}
