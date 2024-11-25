import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-items',
  imports: [],
  templateUrl: './project-items.component.html',
  styleUrl: './project-items.component.scss'
})
export class ProjectItemsComponent {
  @Input() img!: string;
  @Input() title!: string;
  @Input() tech!: string;
  @Input() link!: string;
}
