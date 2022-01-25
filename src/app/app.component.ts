import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
  appMinlabel = 'myAppMinLabel'
  appMaxlabel = 'myAppMaxLabel'
  sqaureHeight = 350;
  squareeWidth = 1500;
  appConter = 20;
  active : boolean = false
  testEventBind() {
    console.log("test Evenbinding click");
  }
  testNumberChange(value : number) {
    console.log("test NumberChange from app action bar : ");
    console.log("this.value >>>>>>",value)
  }
  resetValue(numre : number)
  {
     console.log("resetNNumber",numre);
  }
  // (numberChange) = "testNumberChange()"
  // tesyNumberChange = method สำหรับ output EventBinding ของ app action bar
  //  (numberChange) = output ในตัวapp action bar
  //ค่าตัวแปนที่ส่งจาก output componant นั้น จะต่่องมีค่าสัญลักษณ์ว่า $event

  doAppMinChange(value : number)
  {
    console.log("test minChange event ",value);
    
  }
  doAppMaxChange(value : number)
  {
    console.log("test maxChange event",value);
    
  }
}
//*ngIf = จะใข้ควบคุม view (<div></div>) หรือ [Structural Directive]
//ng-Template เป็น template ที่ถูกสร้างขึ้นมาสามารถใส่ ข้อมูลอะไรลงไปก็ได้ และจะยังไม่ถูกใช้งาน จะถูกใช้งานเมื่อ 
//เรียกผ่าน <ng-template #(ชื่อของ ng-tempalte)>