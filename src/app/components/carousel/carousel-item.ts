import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'trakto-carousel-item',
	template: ` <ng-content></ng-content> `,
	styles: [],
	encapsulation: ViewEncapsulation.None,
})
export class CarouselItem {
	constructor(public elementRef: ElementRef<HTMLElement>) {
		elementRef.nativeElement.setAttribute('tabindex', '-1');
		elementRef.nativeElement.classList.add('carousel-item');
	}

	scrollTo(): void {
		this.elementRef.nativeElement.scrollIntoView({
			inline: 'start',
			behavior: 'smooth',
		});

		// sets focus position for keyboard navigation
		this.elementRef.nativeElement.focus({ preventScroll: true });
	}

	setFocus(): void {
		this.elementRef.nativeElement.focus();
	}
}
