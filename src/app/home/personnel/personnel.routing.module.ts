import {NgModule} from '@angular/core';
import {PersonnelComponent} from './personnel.component';
import {RouterModule} from '@angular/router';

const routes = [{
    path: '',
    component: PersonnelComponent
  }]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelRoutingModule {
}
