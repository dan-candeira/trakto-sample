import { Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, map, timer } from 'rxjs';

@Component({
	selector: 'trakto-layout',
	templateUrl: './layout.html',
	encapsulation: ViewEncapsulation.None,
})
export class Layout {
	today$: Observable<Date> = timer(0, 3600000).pipe(map(() => new Date()));
}
