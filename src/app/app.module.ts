import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    ReactiveFormsModule // ทุกๆ component ที่อยู่ใต้ appComponent จะสามารถใช้งานได้
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//NG_VALUE_ACCESSOR ทำหนา้าที่รองรับการทำงานของ FormsModule
// ReactiveFormsModule ใช้จัดการค่าที่ซับซ้อนได้ดีกว่า NgModule