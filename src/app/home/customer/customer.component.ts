import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CustomerViewController} from './customer.view-controller';
import {CustomerViewModel} from './customer.view-model';
import {MatDialog} from '@angular/material';
import {ConfirmComponent} from '../dialogs/confirm/confirm.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  form: FormGroup;
  customers: CustomerViewModel[];
  customer: CustomerViewModel = new CustomerViewModel();

  constructor(private customerViewController: CustomerViewController,
              public dialog: MatDialog) {
  }

  async ngOnInit() {
    this.form = this.customerViewController.createCustomerFormGroup(this.customer);
    this.load();
  }

  async load() {
    this.customers = await this.customerViewController.loadAll();
    this.form.patchValue(this.customer);
  }

  async save() {

    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '450px',
      height: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        console.log('let do this.');
        this.customer = Object.assign({}, this.form.value);
        await this.customerViewController.save(this.customer);
        this.load();
      } else {
        console.log('Maybe later');
      }
    });
  }
  
  async find(id: number) {
    if (!id) {
      console.log('id');
      id = this.form.controls.id.value;
    }
    this.customer = await this.customerViewController.load(id);
    this.form.patchValue(this.customer);
    console.log(this.customer);
  }
}
