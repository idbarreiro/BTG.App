import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Transaction } from '../core/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl =  environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getLatestTransactions<Response>(): Observable<Response>{
    console.log("Entra al servicio de traer transacciones", this.apiUrl)
    return this.http.get<Response>(`${this.apiUrl}`)
      .pipe(catchError(this.handleError));
  }

  fundSuscribe(transaction: Transaction): Observable<Transaction>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Transaction>(`${this.apiUrl}`, transaction, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    return throwError(() => new Error(error.message || "Server Error"));
  }
}
