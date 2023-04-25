import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ng-container.caret-right-icon, i.caret-right-icon',
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
				d="m1.425 14.1 5.433-5.433a1.655 1.655 0 0 0 0-2.334L1.425.9"
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
export class CaretRightIcon {}
