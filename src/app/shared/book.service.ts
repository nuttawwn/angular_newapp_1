import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  //การใช้ร่วมกันในระดับไหนของ Project และต้องอยู่ในระดับเดียวกันด้วย
})
export class BookService {

  constructor(private http : HttpClient) 
  { 
  //   httpBook()
  //   {
  //     this.http.get<Book[]>()
  //   }
  }
}
