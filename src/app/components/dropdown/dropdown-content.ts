import { Component, ElementRef } from '@angular/core';

@Component({
	selector: '[traktoDropdownContent]',
	template: ` <ng-content></ng-content> `,
	styles: [],
})
export class DropdownContent {
	constructor(private elementRef: ElementRef<HTMLElement>) {
		elementRef.nativeElement.classList.add('dropdown-content');
		elementRef.nativeElement.setAttribute('hidden', 'true');
		elementRef.nativeElement.setAttribute('tabindex', '-1');
	}

	changeVisibility(isOpen: boolean): void {
		if (isOpen) {
			this.elementRef.nativeElement.removeAttribute('hidden');
		} else {
			this.elementRef.nativeElement.setAttribute('hidden', '');
		}
	}

	setFocus(): void {
		this.elementRef.nativeElement.focus();
	}
}
