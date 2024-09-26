import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { TransactionComponent } from './features/transaction/transaction/transaction.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'transaction', component:TransactionComponent}
];
