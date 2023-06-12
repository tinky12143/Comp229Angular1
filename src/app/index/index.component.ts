import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  mission: string[];

  constructor() {
    this.mission = [
      'Experienced District Supervisor at Medtronic®, responsible for promoting neuro modulation programming and neurovascular products in Hong Kong.',
      'Witnessed the industry\'s shift towards digitalization and programming-driven platforms, particularly in medical devices such as surgical navigation systems, anesthesia machines, and robotic-assisted surgical devices.',
      'Seeking practical, advanced programming courses to bridge the skills gap and further advance your career, with a willingness to work from any location.'
    ];
  }
}
