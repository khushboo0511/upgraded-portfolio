import { Component } from '@angular/core';
import { ProjectItemsComponent } from "../project-items/project-items.component";

@Component({
  selector: 'app-projects',
  imports: [ProjectItemsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      img: '#',
      title: 'MERN Estate App',
      tech: 'MERN',
      link: 'https://github.com/khushboo0511/MERN-Estate',
    },
    {
      img: '#',
      title: 'Food Ordering App',
      tech: 'React.js',
      link: 'https://github.com/khushboo0511/Food-App',
    },
    {
      img: '#',
      title: 'Kryptoconnect App',
      tech: 'React.js, ChakraUI',
      link: 'https://github.com/khushboo0511/Cryptocurrency-app',
    },
    {
      img: '#',
      title: 'Personal Portfolio',
      tech: 'React.js',
      link: '',
    },
  ];
}
