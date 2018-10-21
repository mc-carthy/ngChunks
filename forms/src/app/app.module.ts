import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TdFormAssignmentComponent } from './template-driven/form-assignment/form-assignment.component';
import { TdExampleComponent } from './template-driven/example/example.component';
import { ReactiveExampleComponent } from './reactive/reactive-example/reactive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormAssignmentComponent,
    TdExampleComponent,
    ReactiveExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
