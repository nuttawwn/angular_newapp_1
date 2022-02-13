import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyDirective]' //ตัวที่นำไปใช้ใน แปะ ที่ component ในหน้า html
})
export class MyDirectiveDirective {

  constructor() { }

}

//ตัว directive สามารถสรั้างด้วยคำำสั่ง ng g d ชื่อDirective(แนะนำตั้งให้เป็นความสามารถ ของ directive นั้น)
//ตัวมันเมื่อถูกนำไปใช้จะเพิ่มความสามารถให้ component นั้น ทำงานได้มากขึ้น
//สามารถ เพิ่มที่ <selector> and <div> ในหน้า html
