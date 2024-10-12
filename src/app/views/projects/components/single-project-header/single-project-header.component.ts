import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-project-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './single-project-header.component.html',
  styleUrl: './single-project-header.component.scss'
})
export class SingleProjectHeaderComponent {
  @Input() nextProjectLink = '';
}
