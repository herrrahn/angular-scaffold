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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonnelDetailsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    CustomerModule,
    MatDialogModule
  ],
  entryComponents: [ConfirmComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
