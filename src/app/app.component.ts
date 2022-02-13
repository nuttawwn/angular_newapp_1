import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
  employeeCode = "007";
  employeeName = "TAO"



  
}


// (ngModelChange) เป้น out-put 
// [ngModel] เป็น INput
//[(ngModel)] เป็น Two way-binding
// required directive เพื่อทำ validable