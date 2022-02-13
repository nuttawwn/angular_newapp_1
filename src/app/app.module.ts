import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ImageUploadPageComponent } from './image-upload-page/image-upload-page.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { RxMatSliderComponent } from './rx-mat-slider/rx-mat-slider.component';
import { TestRequestModule } from './test-request/test-request.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    RxMatSliderComponent, 
    CardComponent,
    ImageUploadPageComponent,
    MaterialTestComponent,
    MyDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TestRequestModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
