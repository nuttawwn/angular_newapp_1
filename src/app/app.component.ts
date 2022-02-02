import { Component } from '@angular/core';
import { distinct } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
  check : boolean = true
  

  priceList = [10,20,30];

  get summaryPrice()
  {
    const summary = this.priceList.reduce((sum,price) => sum + price,0)
    return summary
  }



  get productPrice()
  {
    return 150
  }

  set productPrice(value : number)
  {
    console.log("value>>>>>>>",value);
    
  }

  constructor()
  {
    console.log("this.productPrice>>>>>>>>>>>>>",this.productPrice)
    this.productPrice = 2000;
    
  }

  addPrice(price : number)
  {
    this.priceList.push(price)
  }
  checkLength()
  {
    if(this.priceList.length <= 10)
    {
      this.check = true
      
    }
  }
}



// การประกาศตัวแปรสามารถประกาศเพิ่มในรูปแบบ get and set function
//1. get function เป็น function สำหรับดึงค่าออกจากตัวแปร และมีการ return ค่าออกจาก function
//2. set function เป็ฯ function เป็ร function ที่ถูกทำงานเมื่อมีการกำหนดค่าให้ตัวแปร แล้วจะมี argument ที่เอาเข้ามาเพื่อกำหนดค่าให้ตัวแปร
//    
