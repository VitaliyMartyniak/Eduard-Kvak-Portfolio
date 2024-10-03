import {Component, Input} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf,
    RouterLink
  ],
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.scss'
})
export class ProjectCardsComponent {
  @Input() projects: any[] = [];

  getBackgroundImageUrl(name: string) {
    return `url('assets/images/${name}.png')`
  }
}
