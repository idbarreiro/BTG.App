import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { TransactionDto, Response } from '../../../core/models/transactionDto';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {

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
