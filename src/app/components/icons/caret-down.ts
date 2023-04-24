import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ng-container.caret-down-icon, i.caret-down-icon',
	template: `
		<svg
			aria-hidden="true"
			focusable="false"
			style="pointer-events: none;"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 8 6"
		>
			<path
				d="M7.912.754a.62.62 0 0 0-.25-.186A.883.883 0 0 0 7.318.5H.682C.562.5.442.524.338.568a.62.62 0 0 0-.25.186.398.398 0 0 0-.088.252.405.405 0 0 0 .098.25L3.416 5.26c.061.073.147.134.249.176A.886.886 0 0 0 4 5.5a.886.886 0 0 0 .335-.064.634.634 0 0 0 .249-.176l3.318-4.004A.405.405 0 0 0 8 1.006a.398.398 0 0 0-.088-.252Z"
				fill="currentColor"
			/>
		</svg>
	`,
	encapsulation: ViewEncapsulation.None,
})
export class CaretDownIcon {}
