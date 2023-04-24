import { Component, ElementRef } from '@angular/core';

@Component({
	selector: 'trakto-carousel-item',
	template: ` <ng-content></ng-content> `,
	styles: [],
})
export class CarouselItem {
	constructor(public elementRef: ElementRef<HTMLElement>) {
		elementRef.nativeElement.setAttribute('tabindex', '-1');
	}

	setFocus(): void {
		this.elementRef.nativeElement.focus();
		this.elementRef.nativeElement.scrollIntoView({
			inline: 'start',
			behavior: 'smooth',
		});
	}
}
