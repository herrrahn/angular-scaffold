import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGrid2Component } from './data-grid2.component';

describe('DataGrid2Component', () => {
  let component: DataGrid2Component;
  let fixture: ComponentFixture<DataGrid2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGrid2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
