import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelDetailsComponent } from './personnel-details.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('PersonnelDetailsComponent', () => {
  let component: PersonnelDetailsComponent;
  let fixture: ComponentFixture<PersonnelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ PersonnelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
