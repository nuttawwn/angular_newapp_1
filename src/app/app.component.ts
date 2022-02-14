import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
  // employeeCode = "007";
  // employeeName = "TAO"
  bmi = 0;
  info = "";
  //เป็นตัวแปลที่เอาไว้เชื่อข้อมูลฝั่ง Html มายัง Typescript
  weightForm = new FormControl(null, Validators.required); // null คือค้่าเริ่มต้น ของตัวแปรที่กำหนดเอาไว้
  heightForm = new FormControl(null, Validators.required);
  

  calcualte() {
    if (this.weightForm.invalid || this.heightForm.invalid) {
      return;
    }
    const weight = this.weightForm.value
    const height = this.heightForm.value
    console.log("const weight>>>>>>", weight);
    console.log("const height>>>>>>", height);
    this.bmi = weight / (height ** 2)
  }

  emailForm = new FormControl(null,[Validators.required,Validators.email]);
  //จะทำให้ Validators สามารถ กำหนดได้ 2 ตัวพร้อมกัน



}
// (ngModelChange) เป้น out-put
// [ngModel] เป็น INput
//[(ngModel)] เป็น Two way-binding
// required directive เพื่อทำ validable