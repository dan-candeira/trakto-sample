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

	@HostListener('document:click', ['$event']) clickOutside(e: MouseEvent) {
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

	@HostListener('document:focusin', ['$event']) focusOutside(e: FocusEvent) {
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
