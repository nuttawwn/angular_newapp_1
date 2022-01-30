import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
