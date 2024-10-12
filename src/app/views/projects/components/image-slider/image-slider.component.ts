import { Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgOptimizedImage, NgStyle } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnInit{
  @Input() photos: string[] = [];
  @Input() direction: 'left' | 'right' = 'left';
  visiblePhotos: string[] = [];

  ngOnInit(): void {
    this.visiblePhotos = [...this.photos];
  }

  getBackgroundImageUrl(name: string) {
    return `url('assets/images/${name}.png')`
  }
}
