import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  templateUrl: './sqaure-flex.component.html',
  styleUrls: ['./sqaure-flex.component.scss']
})
export class SqaureFlexComponent implements OnInit {
  
  @Input() divWidth = 500;
  @Input() divHight = 200;
  constructor() { }

  ngOnInit(): void {
  }

}
