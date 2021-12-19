import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RefundBoxComponent } from './refund-box/refund-box.component';
import { RefundOptionComponent } from './refund-box/components/refund-option/refund-option.component';
import { SelectedSummaryComponent } from './refund-box/components/selected-summary/selected-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  ConfirmBoxConfigModule,
  NgxAwesomePopupModule, 
  ToastNotificationConfigModule 
} from '@costlydeveloper/ngx-awesome-popup';

@NgModule({
  declarations: [
    AppComponent,
    RefundBoxComponent,
    RefundOptionComponent,
    SelectedSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ConfirmBoxConfigModule.forRoot(),
    NgxAwesomePopupModule.forRoot(),
    ToastNotificationConfigModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
