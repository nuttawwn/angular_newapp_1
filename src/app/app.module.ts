import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ImageUploadPageComponent } from './image-upload-page/image-upload-page.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { RxMatSliderComponent } from './rx-mat-slider/rx-mat-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ImageUploadPageComponent,
    MaterialTestComponent,
    RxMatSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
