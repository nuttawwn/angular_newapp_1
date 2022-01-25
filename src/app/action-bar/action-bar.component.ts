import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
 @Input() add_num : number = 1; // เป็นการรับ input ในหนั้า HtmL (action-bar.component) = [add_num]
 @Output() numberChange = new EventEmitter
 //@Output() total = new EventEmitter
 //การเลือกใช้ EventEmiter ในการทำ output Binding ให้เลือกเฉพาะ @angular/core เท่านั้น
 @Input() num = 0
   increaseNum() {
    //console.log('"this.increaseNum()"');    
    if (this.num >0) {
      this.num = this.num - this.add_num 
      this.numberChange.emit(this.num); // เป็นการส่ง paramater ออกไปพร้อมกับ output Event
    }
  }
  decreaseNum() {
   // console.log("this.decreaseNum");   
    if(this.num <100){
    this.num = this.num + this.add_num;
    this.numberChange.emit(this.num);
    }
  }
  //addNumber(value : number)
  addNumber()
  {
    console.log("add New NUmber>>>>>>>>");
    
  }
  constructor() { }
  ngOnInit(){
    this.num 
    console.log("this.num action bar>>>>>>>>>>",this.num)
  }
}
