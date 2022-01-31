import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
  value2 : string = 'Hello Taoswagboy'

  cars =
  [
    {
      vin : 12,
      year : 1990,
      brand : 'Honda',
      color : 'red'

    },
    {
      vin : 13,
      year : 1991,
      brand : 'Honda',
      color : 'red'

    },
    {
      vin : 14,
      year : 1992,
      brand : 'Honda',
      color : 'red'

    },
    {
      vin : 15,
      year : 1993,
      brand : 'Honda',
      color : 'red'

    },
    {
      vin : 16,
      year : 1994,
      brand : 'Honda',
      color : 'red'

    },
    {
      vin : 17,
      year : 1995,
      brand : 'Honda',
      color : 'red'

    },
    {
      vin : 18,
      year : 1996,
      brand : 'Honda',
      color : 'red'

    },
    {
      vin : 19,
      year : 1997,
      brand : 'Honda',
      color : 'red'

    },
    {
      vin : 20,
      year : 1998,
      brand : 'Honda',
      color : 'red'

    }
  ];
  

  // //get function ต้องมี retrun ด้วย
  // get productPrice() 
  // {
  //   return 150;
  // }
  // constructor()
  // {
  //   console.log("this.productPrice>>>>>>>>>>>>>>",this.productPrice)
  // }

}


//วิธีใช้ primeng 
//1.yarn add primeng
//2.yarn add primeicons
//3.copy flie style 
// - "node_modules/primeicons/primeicons.css"
// - "node_modules/primeng/resources/themes/lara-light-indigo/theme.css"
// - "node_modules/primeng/resources/primeng.min.css"
// 4.นำไป copy to angular.json (property style add เพิ่ม)


//วิธีใช้ table Component
//1.ใส่คำสั่ง yarn add @angular/cdk
//2.สามารถ import เรียกใช่ import component ใน primeNg ได้ ()
// Ex import {TableModule} from 'primeng/table';
// นำ TableModule ไป ใส่ใน import