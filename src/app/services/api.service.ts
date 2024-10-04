import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Transaction } from '../core/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl =  environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getAllFunds<Response>(): Observable<Response>{
    return this.http.get<Response>(`${this.apiUrl}/Fund`)
      .pipe(catchError(this.handleError));
  }

  getLatestTransactions<Response>(): Observable<Response>{
    return this.http.get<Response>(`${this.apiUrl}/Transaction`)
      .pipe(catchError(this.handleError));
  }

  createTransaction(transaction: Transaction): Observable<Transaction>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Transaction>(`${this.apiUrl}/Transaction`, transaction, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    return throwError(() => new Error(error.message || "Server Error"));
  }
}
