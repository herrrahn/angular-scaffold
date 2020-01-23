import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CustomerViewController} from './customer.view-controller';
import {CustomerViewModel} from './customer.view-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  form: FormGroup;
  customers: CustomerViewModel[];

  constructor(private customerViewController: CustomerViewController) {
  }

  async ngOnInit() {
    this.form = this.customerViewController.createCustomerFormGroup();
    this.load();
  }

  async load() {
    this.customers = await this.customerViewController.load();
  }

  async save() {
    await this.customerViewController.save(this.form);
    this.load();
  }


}
