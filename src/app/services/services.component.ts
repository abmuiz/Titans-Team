import { ContactForm } from './../models/contact-form-model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  nameProp : string;
  userName : string;
  phoneNo : string;
  serviceProp : string;
  messageProp : string;

  constructor() { }
  ngOnInit() {
  }

  log()
  {
    console.log(this.nameProp);
  }

  submit(f : NgForm)
  {
    let contact = new ContactForm();
    contact.name = this.nameProp;
    contact.userName = this.userName;
    contact.phoneNo = this.phoneNo;
    contact.service = +this.serviceProp;
    contact.message = this.messageProp;

    let t = JSON.stringify(contact);
    console.log(t);
    
  }

}
