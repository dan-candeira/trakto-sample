import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	TemplateRef,
	ViewEncapsulation,
} from '@angular/core';
import { ToastrType } from '@services/toastr.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'trakto-toastr',
	template: `
		<h2>{{ title }}</h2>
		<ng-template
			*ngIf="templateRef"
			[ngTemplateOutlet]="templateRef"
		></ng-template>
		<p *ngIf="body">
			{{ body }}
		</p>
	`,
	styles: [],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastrComponent {
	@Input() title!: string;
	@Input() set body(value: string | TemplateRef<any>) {
		console.log({ value }, typeof value === 'string', typeof value);
		if (typeof value === 'string') {
			this._body = value;
		} else {
			this._templateRef = value;
		}
	}
	@Input() set styleType(value: ToastrType) {
		if (value) {
			this.elementRef.nativeElement.setAttribute('data-variation', value);
		}
	}

	@Input() set visible(value: boolean) {
		this.elementRef.nativeElement.setAttribute(
			'data-visible',
			String(value)
		);
	}

	get body(): string {
		return this._body;
	}

	get templateRef(): TemplateRef<any> {
		return this._templateRef;
	}

	_body!: string;
	_templateRef!: TemplateRef<any>;

	constructor(private elementRef: ElementRef<HTMLElement>) {
		elementRef.nativeElement.classList.add('toastr');
	}
}
