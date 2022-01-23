import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.scss']
})
export class MaxMinMeterComponent implements OnInit {
  @Input() minLabel = 'minLabel' // รับค่าเข้ามาในหน้าที่มีการหยิบไปใช้
  @Input() maxLabel = 'maxLabel' 

  @Output() minChange = new EventEmitter()
  @Output() maxChange = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  doMinChange(value : number){
    this.minChange.emit(value)
  }

  doMaxChange(value : number){
    this.maxChange.emit(value)
  }

}
//parter square backet [] = "" ข้อมูลใน double code จะเป็น state ment ของ ตัวแปร และจะเป็นการกำหนดค่าใน
// @Input() minLabel ตัว minLabel ด้วย



// <app-max-min-meter 
//   [minLabel]="'min'" ประกาศในลักษณะแบบนี้หมายถึง การแทนค่าลงใน ตัว input ในหน้า max-min-metre
//   [maxLabel]="'max'">

// </app-max-min-meter>


// <app-max-min-meter 
//   [minLabel]="appMinlabel" ประกาศในลักษณะแบบนี้จะเป็นการ = ตัวแปรที่มีการสร้างขึ้นมาในหน้า
//   [maxLabel]="appMaxlabel "> 
// </app-max-min-meter>
