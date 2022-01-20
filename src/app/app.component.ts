import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular_newapp_1';
  // com_0 = 'Leon s. Cannady'
  // com_1 = 'Leon s. Cannady'
  // guest : string = ''

  // //this.ใช้อ้างอิงในการเลือกตัวแปล และ method ภายใน class
  // //<!-- {{}} = เทคนิค  interpolation -->
  // ResidentCha() {
  //    this.guest =this.com_0
  // }
  // ChangeName(name: string)
  // {
  //   this.com_1 = name
  //   this.guest = this.com_1
  // }

  //////// <input 
  ////////   #priceBuffetInput ตัวแปลของ INput ในหน้า  HTML แล้วส่งค่าเข้ามาใน method
  ////////   type="text" 
  ////////   value="20000" 
  ////////   placeholder="ราคาบุฟเฟ่ต์"
  //////// >
  value = 0
  calBUffet(value : string) // value ในหน้า HTML 
  {
     const price = Number(value)
      this.value =(price*3)/4
  }

}
