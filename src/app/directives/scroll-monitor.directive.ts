import { Directive, ElementRef, HostListener, Renderer2, } from '@angular/core';

@Directive({
  selector: '[appScrollMonitor]',
  standalone: true
})
export class ScrollMonitorDirective {
  private hasAnimated = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.hasAnimated && this.isElementInView()) {
      this.triggerAnimation();
    }
  }

  private isElementInView(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const lowerBound = windowHeight * 0.9;
    const upperBound = windowHeight * 1.1;

    return rect.bottom >= lowerBound && rect.bottom <= upperBound;
  }

  private triggerAnimation() {
    this.hasAnimated = true;
    this.renderer.removeClass(this.el.nativeElement, 'fade-animation');
  }
}
