import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerEntity} from './customer.entity';
import {FormGroup} from '@angular/forms';

const API_URL = 'http://localhost:8080/customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {

  }

  loadAll(): Promise<CustomerEntity[]> {
    return this.http.get<CustomerEntity[]>(API_URL)
      .toPromise();
  }

  load(id: number): Promise<CustomerEntity> {
    return this.http.get<CustomerEntity>(`${API_URL}/${id}`)
      .toPromise();
  }

  async saveForm(form: FormGroup) {
    return this.http.post(API_URL, form).toPromise();
  }

  async save(entity: CustomerEntity) {
    return this.http.post(API_URL, entity).toPromise();
  }
}
