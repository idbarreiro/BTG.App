import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home/home.component';
import { TransactionComponent } from './features/transaction/transaction/transaction.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    HttpClient
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModuleTsModule { }
