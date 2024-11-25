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
      img: 'assets/blog.png',
      title: 'Blog App',
      tech: 'Django',
      link: 'https://github.com/sumanth2k1/DjangoBlog',
    },
    {
      img: 'assets/ecom.png',
      title: 'Ecommerce App',
      tech: 'React.js',
      link: 'https://github.com/sumanth2k1/Ecommerce-web-shop',
    },
    {
      img: 'assets/newsly.png',
      title: 'News App',
      tech: 'React.js',
      link: 'https://github.com/sumanth2k1/NewsLy',
    },
    {
      img: 'assets/portfolio.png',
      title: 'Personal Portfolio',
      tech: 'React.js',
      link: '',
    },
  ];
}
