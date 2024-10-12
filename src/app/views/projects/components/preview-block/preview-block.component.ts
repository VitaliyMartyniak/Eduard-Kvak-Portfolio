import { Component, Input } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-preview-block',
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './preview-block.component.html',
  styleUrl: './preview-block.component.scss'
})
export class PreviewBlockComponent {
  @Input() title = '';
  @Input() backgroundImage = '';
  @Input() deviceImage = '';
  @Input() deviceSecondImage = '';
  @Input() deviceVideo = '';
  @Input() custom = false;
  @Input() phone = false;
  @Input() desktop = false;
  @Input() tablet = false;
  @Input() screensNumber = 1;
  @Input() height = 726;

  getBackgroundImageUrl(name: string) {
    return `url('assets/images/${name}.png')`
  }
}
