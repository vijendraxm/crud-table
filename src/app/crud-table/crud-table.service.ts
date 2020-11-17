import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { USER_DATA, IUsersData } from './../MOCK_DATA';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CrudTableService {

  constructor(private http: HttpClient) { }

  usersData(): Observable<IUsersData[]> {
    const dataUrl = 'https://api.mocki.io/v1/8e63b65b';
    return this.http.get<IUsersData[]>(dataUrl).pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error);
  }

}
