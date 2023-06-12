import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: {imageUrl: string, link: string, description: string}[];

  constructor() {
    this.projects = [
      {
        imageUrl: 'assets/images/project1.jpg',
        link: 'http://studentweb.cencol.ca/llee113/COMP125/Assignment1/assignment1.html',
        description: 'Dynamically creates (using JavaScript code) a 10X10 HTML table and displays in each cell the value of row times the column to create a multiplication table.'
      },
      {
        imageUrl: 'assets/images/project2.jpg',
        link: 'http://studentweb.cencol.ca/llee113/COMP125/Assignment2/assignment2.html',
        description: 'Clicks on a picture and it opens a window containing a zoomed version of the image, give her a hyperlink (button) to add the pic to a favorites’ area at the bottom of the first page.'
      },
      {
        imageUrl: 'assets/images/project3.jpg',
        link: 'http://studentweb.cencol.ca/llee113/COMP125/Assignment3/assignment3.html',
        description: 'The bug hops randomly around the game area at a given interval. The player tries to catch the bug by clicking on it.'
      }
    ];
  }

}
