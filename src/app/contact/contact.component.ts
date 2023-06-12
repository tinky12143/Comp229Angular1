import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactNumber: string;
  email: string;

  constructor() {
    this.contactNumber = '( +1 ) 647-939-6810';
    this.email = 'llee113@my.centennialcollege.ca';
  }
}
