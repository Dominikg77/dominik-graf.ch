import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(translate: TranslateService){
    
  }

  ngOnInit(){
    AOS.init();
   }
   @Input () arrowRight=true;
  }
