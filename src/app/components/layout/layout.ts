import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Observable, distinctUntilChanged, map, tap, timer } from 'rxjs';

@Component({
	selector: 'trakto-layout',
	templateUrl: './layout.html',
	encapsulation: ViewEncapsulation.None,
})
export class Layout {
	// updates the date every second
	// only will emit when the current date (mm/dd/yy) changes
	today$: Observable<Date> = timer(0, 1000).pipe(
		map(() => new Date()),
		distinctUntilChanged(
			(prev, curr) =>
				prev.toLocaleString([], { dateStyle: 'short' }) ===
				curr.toLocaleString([], { dateStyle: 'short' })
		)
	);
}
