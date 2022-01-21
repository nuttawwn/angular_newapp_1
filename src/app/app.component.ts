import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
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
}
