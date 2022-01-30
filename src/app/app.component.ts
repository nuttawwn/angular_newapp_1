import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
  customerList : string[] = ['cus_1','cus_2','cus_3','cus_4','cus_5','cus_6','cus_7','cus_8']

  pushCustomer()
  {
    this.customerList.push('cus_' +(this.customerList.length +1))
  }
  deleteCustomer()
  {
    this.customerList.pop()
  }
  pushFirstcustomer()
  {
    this.customerList.unshift('cus_unshift' +(this.customerList.length +1))
  }
  removeCustomer(index : number)
  {
    this.customerList.splice(index,1)
  }

  //javascript method สำหรับ arrat
  //method splice() จะเป๋น method ทำงานตู้กับ Index parameter ตัวแรกเป็นตัวกำฟนก index ของ array
  //method splice จะมช้สำหรับการลบค่าใน array โดยมี paramater ในการส่งเข้ามา ตัวเริ่มต้น จย ถึงตัวที่ลบ
}
