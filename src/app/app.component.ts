import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = ''; //password = property 
  title = 'newapp_1';

  onClick() {
    this.password = 'admin1234'
    console.log("Click button");
  }
  getPass() {
    return this.onClick();
  }

}
