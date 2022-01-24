import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    SqaureFlexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
