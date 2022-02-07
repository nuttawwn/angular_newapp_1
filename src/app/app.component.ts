import { Component } from '@angular/core';
import { BookService } from './shared/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_newapp_1';
  constructor(private  service : BookService){
    this.service.httpBook().subscribe(red => {console.log(red);
    })
  }
  
}
                                    