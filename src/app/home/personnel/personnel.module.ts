import {NgModule} from '@angular/core';
import {PersonnelComponent} from './personnel.component';
import {CommonModule} from '@angular/common';
import {PersonnelService} from './personnel.service';
import {HttpClientModule} from '@angular/common/http';
import {PersonnelViewController} from './personnel.view-controller';

@NgModule(
  {
    declarations: [PersonnelComponent],
    providers: [PersonnelService, PersonnelViewController],
    exports: [PersonnelComponent],
    imports: [CommonModule, HttpClientModule]
  }
)
export class PersonnelModule {
}
