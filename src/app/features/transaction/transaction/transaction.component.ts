import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FundDto, Response } from '../../../core/models/fundDto';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Transaction } from '../../../core/models/transaction';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {

  funds: FundDto[] = [];
  selectedFund: number = 0;
  minimumAmount: number = 0;
  email: string = '';
  phone: string = '';
  notificationType: number = 0; 
  transactionType: number = 0; 
  transactionDate: string = new Date().toISOString();

  constructor(private apiService: ApiService, private router: Router){
  }

  ngOnInit(): void{
    this.apiService.getAllFunds<Response>().subscribe({
      next: (res: Response) => {
        this.funds = res.data;
      },
      error: (err) => {
        console.error('Error trayendo los fondos', err);
      }
    });
  }

  onFundChange(): void {
    const selected = this.funds.find(fund => fund.id === this.selectedFund);
    console.log("fondo Id", selected);
    this.minimumAmount = selected ? selected.minAmount : 0;
  }

  createTransaction(): void {
    const transactionData: Transaction = {
      type: this.transactionType,
      date: new Date(this.transactionDate),
      fund: {
        id: {},
        fundId: this.funds.find(fund => fund.id === this.selectedFund)?.fundId || 0,
        name: this.funds.find(fund => fund.id === this.selectedFund)?.name || '',
        minAmount: this.minimumAmount,
        category: this.funds.find(fund => fund.id === this.selectedFund)?.category || ''
      },
      client: {
        id: {},
        email: this.email,
        phone: this.phone,
        estimate: 500000,
        typeNotification: this.notificationType
      }
    };
    
    console.log("Transaction", transactionData);

    this.apiService.createTransaction(transactionData).subscribe({
      next: (response) => {
        console.log('Transacción creada:', response);
      },
      error: (err) => {
        console.error('Error creando transacción', err);
      }
    });
  }

}
