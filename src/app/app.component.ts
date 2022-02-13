import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookService } from './shared/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
  // constructor(private  service : BookService){
  //   this.service.httpBook().subscribe(red => {console.log(red);
  //   })
  // }
  booklist = [];
  constructor(private http: HttpClient) {

  }

  // loadBook(event: any) {
  //   const inputTextElemnt: HTMLInputElement = event.target;
    
  //   // this.http.get<any>('https://www.anapioficeandfire.com/api/books?name='+inputTextElemnt.value)
  //   //   //.subscribe() ทำหน้าในการ ยิง request ไปที่ service
  //   //   .subscribe(response => this.booklist = response);
  // }
}
