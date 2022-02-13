import { HttpClient } from '@angular/common/http';
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHttpBook]'
})
export class HttpBookDirective {
 @Output() appHttpBook = new EventEmitter()
  // booklist = [];
  constructor(private http: HttpClient) { }
  @HostListener('input', ['$event']) LoadBook(event: any) {
    const inputTextElemnt: HTMLInputElement = event.target;
    this.http.get<any>('https://www.anapioficeandfire.com/api/books?name='+inputTextElemnt.value)
      .subscribe(response => this.appHttpBook.emit(response));
  }
}
