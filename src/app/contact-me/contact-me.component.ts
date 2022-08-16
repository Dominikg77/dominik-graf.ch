import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  isSubmitted = false;


  public email: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ], []),
    email: new FormControl('', [
      Validators.required
    ], []),
    message: new FormControl('', [
      Validators.required
    ], []),

  });



  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

    setTimeout(() => {
      this.isSubmitted = true;
    }, 3000);
    
}
}