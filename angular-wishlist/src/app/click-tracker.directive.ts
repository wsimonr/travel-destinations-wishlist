import {Directive, ElementRef} from '@angular/core';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[appClickTracker]'
})
export class ClickTrackerDirective {

  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
    fromEvent(this.element, 'click').subscribe(event => this.track(event));
  }

  track(event: Event): void {
    const elemTags = this.element.attributes.getNamedItem('data-tracker-tags').value.split(' ');
    console.log(`||||||||||| track event: "${elemTags}"`);
  }

}
