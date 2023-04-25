import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ng-container.youtube-icon, i.youtube-icon',
	template: `
		<svg
			aria-hidden="true"
			focusable="false"
			style="pointer-events: none;"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 20 20"
		>
			<circle cx="10" cy="10" r="10" fill="#FF0100" />
			<path
				fill="#fff"
				d="M14.392 7.675a1.159 1.159 0 0 0-.809-.833C12.867 6.667 10 6.667 10 6.667s-2.867 0-3.583.191a1.158 1.158 0 0 0-.809.834 12.083 12.083 0 0 0-.191 2.204c-.005.744.059 1.488.191 2.22a1.158 1.158 0 0 0 .809.8c.716.192 3.583.192 3.583.192s2.867 0 3.583-.191a1.16 1.16 0 0 0 .809-.834c.13-.722.194-1.454.191-2.187.005-.745-.06-1.488-.191-2.221Z"
			/>
			<path
				fill="#FF0100"
				d="m9.063 11.258 2.395-1.362-2.396-1.363v2.725Z"
			/>
		</svg>
	`,
	encapsulation: ViewEncapsulation.None,
})
export class YoutubeIcon {}
