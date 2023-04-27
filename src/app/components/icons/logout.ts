import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ng-container.logout-icon, i.logout-icon',
	template: `
		<svg
			aria-hidden="true"
			focusable="false"
			style="pointer-events: none;"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65 2.5 12l3.35 3.35"
				stroke="#7183A6"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	`,
	encapsulation: ViewEncapsulation.None,
})
export class LogoutIcon {}
