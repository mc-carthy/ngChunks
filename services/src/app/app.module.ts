import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

import { AccountsService } from './shared/accounts.service';
import { LoggingService } from './shared/logging.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './shared/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      AccountsService,
      LoggingService,
      CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
