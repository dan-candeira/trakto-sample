import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'trakto-layout',
	templateUrl: './layout.html',
	encapsulation: ViewEncapsulation.None,
})
export class Layout {
	today = new Date();
}
