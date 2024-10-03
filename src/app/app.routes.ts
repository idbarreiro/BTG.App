import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { TransactionComponent } from './features/transaction/transaction/transaction.component';
import { RecordComponent } from './features/record/record/record.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'record', component:RecordComponent},
    {path:'transaction', component:TransactionComponent}
];
