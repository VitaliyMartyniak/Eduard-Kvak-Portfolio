import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-expandable-section',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './expandable-section.component.html',
  styleUrl: './expandable-section.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed <=> expanded', [
        animate('1s ease')
      ])
    ]),
    trigger('rotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(45deg)' })),
      transition('collapsed <=> expanded', [
        animate('1s ease')
      ])
    ])
  ]
})
export class ExpandableSectionComponent {
  @Input() isExpanded: boolean = false;
  @Input() title: string = "";
  @Input() showBottomLine = true;
  @Output() toggle = new EventEmitter();

  toggleSection(): void {
    this.toggle.emit();
  }
}

