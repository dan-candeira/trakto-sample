import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'trakto-module-card',
	template: `
		<a [routerLink]="link">
			<span class="module-card__title">{{ title }}</span>
			<img [src]="image" alt="" />
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
