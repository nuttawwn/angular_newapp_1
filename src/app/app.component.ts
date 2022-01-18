import { Component } from '@angular/core';
import { StoreService } from 'src/store/store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';

constructor(public store : StoreService)
{
  //this.store.increaseLimitAction.next(10)
  //การเรียกใช้ในลักษณะแบบนี้ไม่ควรเรียกใช้เพราะป้องการผู้ใช้อื่นเข้ามาใน subject โดยตรง 
  //ให้ทำในรูปแบบการเขียนโค้ดแบบ Encapsulation 
  //this.store.increaseLimit(10)
}

}
