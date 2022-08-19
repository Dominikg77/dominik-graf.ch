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
  arrowRight: boolean;
  
window(){
  if (window.scrollY <1000){
    this.arrowRight= false;
    console.log(`Hat funktioniert`)
  }else{
    this.arrowRight= true;
  }
}
}
