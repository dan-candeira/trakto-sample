import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Output,
} from '@angular/core';
import { TraktoFocusEvents } from '../directives/focus-events';

@Directive({
	selector: '[dropdownEvents]',
})
export class TraktoDropdownEvents extends TraktoFocusEvents {
	@Output('keyEvents') keyEvents = new EventEmitter();

	@HostListener('keydown', ['$event']) handleKey(event: KeyboardEvent) {
		console.log(event);
	}
}
