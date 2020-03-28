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
import {MatDialogModule} from '@angular/material';
import {AuthService} from './auth/auth.service';
import { AuthTesterComponent } from './home/auth-tester/auth-tester.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './auth/request.interceptor';
import { SearchComponent } from './home/dashboard/search/search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonnelDetailsComponent,
    ConfirmComponent,
    AuthTesterComponent,
    SearchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClarityModule,
        BrowserAnimationsModule,
        CustomerModule,
        MatDialogModule,
        FormsModule
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
