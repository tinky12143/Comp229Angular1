import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  name: string;
  studentNumber: number;
  background: string;
  favouriteThings: string[];

  constructor() {
    this.name = 'Lee Lok Yan';
    this.studentNumber = 301233707;
    this.background = 'Prior to my study in Centennial College, I was the District Supervisor of a global medical device company - Medtronic® and responsible for promoting neuro modulation programming and neurovascular products in Hong Kong. I have witnessed the evolvement of the medical device industry into a digitalized, programming-driven and virtual platform with my 10-year experiences. Various medical devices such as surgical navigation systems, anaesthesia machines and robotic-assisted surgical devices, require a high level of programming skills to understand, alter and navigate their functions and tools. There is an emerging need for software scripting skills not only for using the applications but also altering the applications to fit customer’s needs. Therefore, I am looking for practical, advanced and latest programming courses to fulfil that gap and so I can further advance my career.';
    this.favouriteThings = ['Snowboarding', 'Watching Movie', 'Eating', 'Biking'];
  }
}
