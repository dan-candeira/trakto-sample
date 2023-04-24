import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	OnInit,
	Output,
} from '@angular/core';

@Directive({
	selector: 'button[traktoDropdownButton]',
})
export class DropdownButton implements OnInit {
	@Output() clicked: EventEmitter<any> = new EventEmitter();

	@HostListener('click', ['$event']) handleClick(event: any) {
		this.clicked.emit(event);
	}

	constructor(private elementRef: ElementRef<HTMLElement>) {
		elementRef.nativeElement.classList.add('dropdown-button');
	}

	ngOnInit(): void {
		this.elementRef.nativeElement.setAttribute('aria-haspopup', 'true');
		this.elementRef.nativeElement.setAttribute('aria-expanded', 'false');
		this.elementRef.nativeElement.setAttribute('type', 'button');
	}

	setAriaExpanded(isExpanded: boolean): void {
		this.elementRef.nativeElement.setAttribute(
			'aria-expanded',
			String(isExpanded)
		);
	}
}
