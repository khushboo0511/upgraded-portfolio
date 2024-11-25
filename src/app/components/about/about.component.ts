import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  educationData = [
    {
      year: 2024,
      title: 'M.Sc Computer Science',
      duration: '2 years',
      details:
        'Completed my post-graduation with distinction from Mumbai University with Computer Science major',
    },
    {
      year: 2022,
      title: 'B.Sc Mathematics',
      duration: '3 years',
      details:
        'Completed my Graduation with distinction from Mumbai University with Mathematics major',
    },
    {
      year: 2019,
      title: 'H.S.C',
      duration: '2 Years',
      details:
        'Completed my Higher Secondary Education in the field of Science from Maharashtra State Board',
    },
    {
      year: 2017,
      title: 'S.S.C',
      duration: '',
      details: 'Completed my Secondary Education from Maharashtra State Board',
    },
  ]
  skillsData = [
    {
      title: 'Frontend',
      details: 'ReactJS, Next.js, React Native, Tailwind CSS, HTML, CSS, Angular, JavaScript',
    },
    {
      title: 'Backend',
      details: 'Node.js, Express.js, RESTful APIs',
    },
    {
      title: 'Databases',
      details: 'MongoDB, MySQL, PostgreSQL',
    },
    {
      title: 'Programming Languages',
      details: 'JavaScript, Java, C++, Python, Dart',
    },
    {
      title: 'DevOps',
      details: 'Linux, Docker, CI/CD',
    },
    {
      title: 'Other Tools',
      details: 'Git & GitHub, Docker, Spring Boot, Redux',
    },
  ];
}
