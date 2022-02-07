import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { Book } from './test-request-get';
@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css']
})
export class TestRequestGetComponent {
  bookList: Book[] = [];
  //หลังมีการประกาศใช้ Book.service ใน floder shared
 // constructor(private http: HttpClient) { }

  constructor(private service: BookService) { 
    this.service.httpBook()
    .subscribe(response => {
    this.bookList = response;
  })
  }
  
  searchBookList(name: string) {
    this.service.httpBook()
      .subscribe(response => {
        this.bookList = response;
      })
  }
}
