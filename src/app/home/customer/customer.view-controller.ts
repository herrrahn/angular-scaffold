import {Injectable} from '@angular/core';
import {CustomerService} from './customer.service';
import {CustomerViewModel} from './customer.view-model';
import {CustomerEntity} from './customer.entity';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class CustomerViewController {

  constructor(private customerService: CustomerService,
              private formBuilder: FormBuilder) {

  }
  createCustomerFormGroup(): FormGroup {
    return this.formBuilder.group({
      cust_id: ['', [Validators.required]],
      full_name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  async load(): Promise<CustomerViewModel[]> {
    return (await this.customerService.load()).map( c => this.toViewModel(c));
  }

  async save(form: FormGroup) {
    return await this.customerService.save(form.value);
  }

  private toViewModel(entity: CustomerEntity) {
    const viewModel: CustomerViewModel = new CustomerViewModel();
    viewModel.id = entity.cust_id;
    viewModel.fullName = entity.full_name;
    viewModel.email = entity.email;
    return viewModel;
  }

}
