import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
	selector: 'button[traktoCarouselNext]',
	template: ` <ng-content></ng-content> `,
	styles: [],
})
export class CarouselButtonNext {
	@Output() clicked: EventEmitter<any> = new EventEmitter();

	@HostListener('click', ['$event']) handleClick(event: any) {
		this.clicked.emit(event);
	}
}

@Component({
	selector: 'button[traktoCarouselPrevious]',
	template: ` <ng-content></ng-content> `,
	styles: [],
})
export class CarouselButtonPrevious {
	@Output() clicked: EventEmitter<any> = new EventEmitter();

	@HostListener('click', ['$event']) handleClick(event: any) {
		this.clicked.emit(event);
	}
}
