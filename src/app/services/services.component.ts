import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services: string[];

  constructor() {
    this.services = [
      'Website Development',
      'Android app Development',
      'Database development'
    ];
  }

}
