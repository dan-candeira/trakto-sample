import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Output,
} from '@angular/core';

@Directive({
	selector: '[traktoFocusOutside]',
})
export class TraktoFocusOutside {
	@Output('traktoFocusOutside') blurEvent = new EventEmitter();

	@HostListener('document:focusin', ['$event']) clickOutside(e: FocusEvent) {
		let isInside = false;
		let target = e.target;

		while (target && !isInside) {
			isInside = this.elementRef.nativeElement === target;
			target = (<HTMLElement>target).parentElement;
		}

		if (!isInside) {
			this.blurEvent.emit();
		}
	}

	constructor(private elementRef: ElementRef<HTMLElement>) {}
}
