import { Component, OnInit } from '@angular/core';




interface Project {
  title: string;
  description: string;
  tech: string;
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {



     projects: Project[] = [
    {
      title: 'Student Housing Platform',
      description: 'a student rental platform currently under development, featuring a matching system similar to swipe-based apps. I worked on building a scalable backend using .NET Core, PostgreSQL, Redis, and SignalR, while developing the web frontend with Angular. The platform includes real-time chat and notifications to enhance user experience, focusing on clean architecture and optimized performance.',
      tech: 'C#, .NET Core, Angular, DDD Clean Architecture, PostgreSQL'
    },
    {
      title: 'Stadium Booker',
      description: 'This is a stadium reservation platform with a scalable backend built using .NET Core, and FastAPI, and a machine learning service in Python to analyze peak hours. I also developed the web frontend with Angular, creating a cross-platform mobile application to provide a seamless booking experience.',
      tech: '.NET Core, Angular, FastAPI, Python, Sql Server'
    },
    {
      title: 'Education with AI',
      description: 'Developed a web application for exam analysis using React.js, Node.js, and MySQL, integrating AI to automatically analyze exam images and generate responses. The platform streamlines grading and provides intelligent feedback to enhance the evaluation process.',
      tech: 'React.js, Node.js, MySQL'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}