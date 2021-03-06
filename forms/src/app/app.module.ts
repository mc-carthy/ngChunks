import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TdFormAssignmentComponent } from './template-driven/form-assignment/form-assignment.component';
import { TdExampleComponent } from './template-driven/example/example.component';
import { ReactiveExampleComponent } from './reactive/reactive-example/reactive-example.component';
import { ReactiveAssignmentComponent } from './reactive/reactive-assignment/reactive-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormAssignmentComponent,
    TdExampleComponent,
    ReactiveExampleComponent,
    ReactiveAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
