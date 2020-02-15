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

  createCustomerFormGroup(customerViewModel: CustomerViewModel): FormGroup {
    return this.formBuilder.group({
      id: [customerViewModel.id, [Validators.required]],
      fullName: [customerViewModel.fullName, [Validators.required]],
      email: [customerViewModel.email, [Validators.required]]
    });
  }

  async load(id: number): Promise<CustomerViewModel> {
    return this.toViewModel(await this.customerService.load(id));
  }

  async loadAll(): Promise<CustomerViewModel[]> {
    return (await this.customerService.loadAll()).map(c => this.toViewModel(c));
  }

  async save(customerViewModel: CustomerViewModel) {
    console.log(customerViewModel);
    return await this.customerService.save(this.toEntity(customerViewModel));
  }

  private toEntity(customerViewModel: CustomerViewModel): CustomerEntity {
    const entity: CustomerEntity = new CustomerEntity();
    entity.cust_id = customerViewModel.id;
    entity.full_name = customerViewModel.fullName;
    entity.email = customerViewModel.email;
    return entity;
  }

  private toViewModel(entity: CustomerEntity) {
    const viewModel: CustomerViewModel = new CustomerViewModel();
    viewModel.id = entity.cust_id;
    viewModel.fullName = entity.full_name;
    viewModel.email = entity.email;
    return viewModel;
  }

}
