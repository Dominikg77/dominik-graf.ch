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
  arrowRight: boolean=true;
  
window(){
  if (window.scrollY <100){
    this.arrowRight= false;
    window.alert("funktion")
  }else{
    this.arrowRight= true;
  }
}
}
