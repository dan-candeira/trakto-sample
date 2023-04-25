import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'trakto-module-card',
	template: `
		<a [routerLink]="link">
			<span class="module-card__title">{{ title }}</span>
			<div class="module-card__image-ring">
				<img [src]="image" alt="" />
			</div>
		</a>
	`,
	encapsulation: ViewEncapsulation.None,
	host: {
		class: 'module-card',
	},
})
export class ModuleCardComponent {
	@Input() image!: string;
	@Input() link!: string;
	@Input() title!: string;
}
