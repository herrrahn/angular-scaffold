import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonnelComponent} from './home/personnel/personnel.component';


const routes: Routes = [
  {path: 'personnel', component: PersonnelComponent},
  {path: '**', component: PersonnelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
