import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ShortenPipe } from './pipe-example/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
