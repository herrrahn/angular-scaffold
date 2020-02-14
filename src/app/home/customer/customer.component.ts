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

  constructor(private customerViewController: CustomerViewController,
              public dialog: MatDialog) {
  }

  async ngOnInit() {
    this.form = this.customerViewController.createCustomerFormGroup();
    this.load();
  }

  async load() {
    this.customers = await this.customerViewController.load();
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
        await this.customerViewController.save(this.form);
        this.load();
      } else {
        console.log('Maybe later');
      }
    });
  }


}
