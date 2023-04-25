import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ng-container.caret-left-icon, i.caret-left-icon',
	template: `
		<svg
			aria-hidden="true"
			focusable="false"
			style="pointer-events: none;"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 9 15"
		>
			<path
				d="M7.5 14.1 2.067 8.667a1.655 1.655 0 0 1 0-2.334L7.5.9"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	`,
	encapsulation: ViewEncapsulation.None,
})
export class CaretLeftIcon {}
