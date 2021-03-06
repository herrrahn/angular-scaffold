import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {CustomerComponent} from './home/customer/customer.component';
import {AuthTesterComponent} from './home/auth-tester/auth-tester.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'auth', component: AuthTesterComponent},
  {path: 'personnel', loadChildren: './home/personnel/personnel.module#PersonnelModule'},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
