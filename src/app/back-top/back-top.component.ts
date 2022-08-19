import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () arrowRight=true;
}
