import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerComponent} from './customer.component';
import {CustomerViewController} from './customer.view-controller';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomerViewModel} from './customer.view-model';
import {of} from 'rxjs';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ClrInputModule, ClrSelectModule} from '@clr/angular';


describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  let customerViewControllerStub: any;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {

    customerViewControllerStub = {
      createCustomerFormGroup(): FormGroup {
        return this.formBuilder.group({
          cust_id: ['', [Validators.required]],
          full_name: ['', [Validators.required]],
          email: ['', [Validators.required]]
        });
      },
      async load(): Promise<CustomerViewModel[]> {
        return of<CustomerViewModel[]>().toPromise();
      },

      async save(form: FormGroup) {
        return true;
      }
    };

    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule, ClrSelectModule, ClrInputModule, ReactiveFormsModule],
      declarations: [CustomerComponent
      ], providers: [{provide: CustomerViewController, useValue: customerViewControllerStub},
        {provide: FormBuilder, useValue: formBuilder}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({
      cust_id: ['', [Validators.required]],
      full_name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
