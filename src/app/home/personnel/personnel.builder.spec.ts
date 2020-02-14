import {PersonnelDetailsComponent} from './personnel-details/personnel-details.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PersonnelBuilder} from './personnel.builder';

describe('PersonnelBuilder', () => {
  let component: PersonnelBuilder;
  // let fixture: ComponentFixture<PersonnelBuilder>;

  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [ PersonnelBuilder ]
    // })
    //   .compileComponents();
    component = new PersonnelBuilder();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(PersonnelBuilder);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    const personnel = component.build();
    console.log(personnel);
    expect(personnel).toBeTruthy();
  });
});
