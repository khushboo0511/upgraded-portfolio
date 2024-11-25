import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-haha',
  imports: [CommonModule,
  ],
  templateUrl: './haha.component.html',
  styleUrl: './haha.component.scss',
  animations: [
    
  ],
  standalone: true
})
export class HahaComponent {
   roles = ['Developer', 'Coder', 'Tech Enthusiast'];
}
