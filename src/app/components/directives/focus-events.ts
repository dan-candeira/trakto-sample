import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Output,
} from '@angular/core';

@Directive({
	selector: '[focusEvents]',
})
export class TraktoFocusEvents {
	@Output('focusEvents') focusEvents = new EventEmitter();

	@HostListener('document:focusin', ['$event'])
	@HostListener('document:click', ['$event'])
	browserEvents(e: MouseEvent | FocusEvent) {
		let isInside = false;
		let target = e.target;

		while (target && !isInside) {
			isInside = this.elementRef.nativeElement === target;
			target = (<HTMLElement>target).parentElement;
		}

		if (!isInside) {
			this.focusEvents.emit();
		}
	}

	constructor(public elementRef: ElementRef<HTMLElement>) {}
}
