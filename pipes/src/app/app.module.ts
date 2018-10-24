import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ShortenPipe } from './pipe-example/shorten.pipe';
import { FilterPipe } from './pipe-example/filter.pipe';
import { ReversePipe } from './pipe-example/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
