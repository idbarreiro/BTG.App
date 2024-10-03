import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home/home.component';
import { TransactionComponent } from './features/transaction/transaction/transaction.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { RecordComponent } from './features/record/record/record.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    HttpClient,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModuleTsModule { }
