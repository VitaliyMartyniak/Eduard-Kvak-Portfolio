import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-review-slider',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './review-slider.component.html',
  styleUrl: './review-slider.component.scss'
})
export class ReviewSliderComponent implements OnInit, OnDestroy {
  @Input() title = '';

  reviews = [
    {
      text: "Ed is an outstanding designer whose positive attitude, strong work ethic, and proactive approach continually impressed me.",
      author: "Amanda Hilliard",
      position: "SVP, Product & Experience at Car IQ"
    },
    {
      text: "As a product designer, Ed's attention to detail is unparalleled, making him exceptional at creating design systems.",
      author: "Sara Elizabeth Rutledge",
      position: "Senior Product Designer at HatchWorks"
    },
    {
      text: "I had the pleasure of collaborating with Ed on our latest project with Car IQ, and the experience was phenomenal.",
      author: "Larry Aasen",
      position: "Lead Mobile Engineer (Flutter) at Car IQ"
    },
    {
      text: "Eduard impressed me with his attention to detail and ability to propose effective and creative solutions to complex problems.",
      author: "Roman Kaminechny",
      position: "Head of the Design Department at Cieden"
    }
  ];

  currentReviewIndex = 0;
  intervalId: any;

  // Move to the next review
  nextReview() {
    if (this.currentReviewIndex < this.reviews.length - 1) {
      this.currentReviewIndex++;
    } else {
      this.currentReviewIndex = 0;  // Loop back to the first review
    }
  }

  // Move to the previous review
  previousReview() {
    if (this.currentReviewIndex > 0) {
      this.currentReviewIndex--;
    } else {
      this.currentReviewIndex = this.reviews.length - 1;  // Loop back to the last review
    }
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextReview();
    }, 5000);
  }

  // Clear the interval when the component is destroyed to avoid memory leaks
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
