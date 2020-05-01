import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {PersonnelDetailsComponent} from './home/personnel/personnel-details/personnel-details.component';
import {CustomerModule} from './home/customer/customer.module';
import {ConfirmComponent} from './home/dialogs/confirm/confirm.component';
import {MatDialogModule, MatSortModule, MatTableModule} from '@angular/material';
import {AuthService} from './auth/auth.service';
import { AuthTesterComponent } from './home/auth-tester/auth-tester.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './auth/request.interceptor';
import { SearchComponent } from './home/dashboard/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { StringListComponent } from './components/string-list/string-list.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DataGrid2Component } from './components/data-grid2/data-grid2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonnelDetailsComponent,
    ConfirmComponent,
    AuthTesterComponent,
    SearchComponent,
    NavBarComponent,
    StringListComponent,
    DataGridComponent,
    DataGrid2Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClarityModule,
        BrowserAnimationsModule,
        CustomerModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatSortModule
    ],
  entryComponents: [ConfirmComponent],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
