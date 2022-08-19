import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements OnInit {
idOnTop=false;

  constructor() { }

  ngOnInit(): void {
    document.getElementById('back-top2')?.classList.add('d-none');
  }
 
}

addEventListener('scroll', function(){
let isOnTop=true;
console.log(scrollY)

if(isOnTop && this.scrollY <= 750){
  console.log('oben')
  this.document.getElementById('back-top2')?.classList.add('d-none')
}else{
  this.document.getElementById('back-top2')?.classList.remove('d-none')
  isOnTop = false;
  console.log('nicht ganz oben')
}
});
