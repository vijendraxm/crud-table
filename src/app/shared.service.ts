import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable()
export class SharedService {

  constructor(
    public httpclient: HttpClient,
    public errorService: ErrorService,
    public router: Router) { }

  getDataCall(url: string) {
    return this.httpclient.get<any>(url).pipe(catchError((error) => {
      return this.errorHandlerFunc(error);
    }));
  }

  errorHandlerFunc(error: HttpErrorResponse) {
    return of(this.errorService.errorHandler(error, this.router));
  }

}
