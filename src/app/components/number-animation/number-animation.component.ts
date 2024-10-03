import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {interval, takeWhile} from "rxjs";

@Component({
  selector: 'app-number-animation',
  standalone: true,
  imports: [],
  templateUrl: './number-animation.component.html',
  styleUrl: './number-animation.component.scss'
})
export class NumberAnimationComponent implements OnInit, OnChanges{
  @Input() targetNumber: number = 100;
  duration: number = 1500;

  currentNumber: number = 0;

  ngOnInit(): void {
    this.animateNumber(this.targetNumber, this.duration);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['targetNumber'] || changes['duration']) {
      this.animateNumber(this.targetNumber, this.duration);
    }
  }

  animateNumber(target: number, duration: number) {
    const startTime = performance.now();
    const updateInterval = 10; // Update every 10ms

    this.currentNumber = 0; // Reset current number

    const numberObservable = interval(updateInterval).pipe(
      takeWhile(() => this.currentNumber < target)
    );

    numberObservable.subscribe(() => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      this.currentNumber = Math.floor(progress * target);
    });
  }
}

