import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
	selector: 'button[traktoCarouselNext], button[traktoCarouselPrevious]',
	template: ` <ng-content></ng-content> `,
})
export class CarouselPagingButton {
	@Output() clicked: EventEmitter<any> = new EventEmitter();

	@HostListener('click', ['$event']) handleClick(event: any) {
		this.clicked.emit(event);
	}
}
