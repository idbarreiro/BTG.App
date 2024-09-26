import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { TransactionDto, Response } from '../../../core/models/transactionDto';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public transactions: TransactionDto[] = [];

  constructor(private apiService: ApiService, private router: Router){
  }

  ngOnInit(): void{
    this.apiService.getLatestTransactions<Response>().subscribe({
      next: (res: Response) => {
        this.transactions = res.data;
      },
      error: (err) => {
        console.error('Error trayendo las transacciones', err);
      }
    });
  }

  newTransaction(){
    this.router.navigate(['/transaction']);
  }
}
