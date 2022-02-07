import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../test-request/test-request-get/test-request-get';
@Injectable({
  providedIn: 'root'
  // service นี้จะให้ใช้ร่วมกันในระดับไหนของ Project
})
export class BookService {
  constructor(private http: HttpClient) { }
  httpBook() {
    return this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books?name=')
  }
}
