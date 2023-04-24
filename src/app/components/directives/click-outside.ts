import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Output,
} from '@angular/core';

@Directive({
	selector: '[traktoClickOutside]',
})
export class TraktoClickOutside {
	@Output('traktoClickOutside') blurEvent = new EventEmitter();

	@HostListener('document:click', ['$event']) clickOutside(e: MouseEvent) {
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
