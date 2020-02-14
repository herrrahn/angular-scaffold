import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CustomerComponent} from './customer.component';
import {CustomerService} from './customer.service';
import {CustomerViewController} from './customer.view-controller';
import {ClrInputModule, ClrSelectModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';

@NgModule(
  {
    declarations: [CustomerComponent],
    providers: [CustomerService, CustomerViewController],
    exports: [CustomerComponent],
    imports: [CommonModule, HttpClientModule, ClrSelectModule, ClrInputModule, ReactiveFormsModule,
      MatDialogModule]
  }
)
export class CustomerModule {
}
