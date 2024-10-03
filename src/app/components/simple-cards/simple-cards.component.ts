import {Component, Input} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-simple-cards',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './simple-cards.component.html',
  styleUrl: './simple-cards.component.scss'
})
export class SimpleCardsComponent {
  @Input() twoColumns = false;
  @Input() cards: any[] = [];
}
