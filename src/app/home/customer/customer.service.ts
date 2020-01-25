import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {CustomerEntity} from './customer.entity';
import {FormGroup} from '@angular/forms';

const API_URL = 'http://localhost:8080/customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {

  }

  load(): Promise<CustomerEntity[]> {

    return this.http.get<CustomerEntity[]>(API_URL)
      .pipe(
       // tap( () => {}, error => console.log('e:', error))
      )
      .toPromise();

  }

  async save(form: FormGroup) {
     return this.http.post(API_URL, form).toPromise();
  }
}
