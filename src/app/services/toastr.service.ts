import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export type ToastrType = 'success' | 'error' | 'warning' | 'info';

export interface Toastr {
	title: string;
	body: string | TemplateRef<any>;
	styleType?: ToastrType;
	visible?: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class ToastrService {
	toastrData$: Subject<Toastr> = new Subject();

	/**
	 *
	 * @param param - Params to fill toastr component
	 * @param delay - Defines visibility timeout, default 3000ms
	 */
	success({ title, body }: Toastr, delay = 3000): void {
		this.toastrData$.next({
			title,
			body,
			styleType: 'success',
			visible: true,
		});

		setTimeout(() => {
			this.toastrData$.next({
				title,
				body,
				styleType: 'success',
				visible: false,
			});
		}, delay);
	}

	/**
	 *
	 * @param param - Params to fill toastr component
	 * @param delay - Defines visibility timeout, default 3000ms
	 */
	warning({ title, body }: Toastr, delay = 3000): void {
		this.toastrData$.next({
			title,
			body,
			styleType: 'warning',
			visible: true,
		});

		setTimeout(() => {
			this.toastrData$.next({
				title,
				body,
				styleType: 'warning',
				visible: false,
			});
		}, delay);
	}

	/**
	 *
	 * @param param - Params to fill toastr component
	 * @param delay - Defines visibility timeout, default 3000ms
	 */
	info({ title, body }: Toastr, delay = 3000): void {
		this.toastrData$.next({
			title,
			body,
			styleType: 'info',
			visible: true,
		});

		setTimeout(() => {
			this.toastrData$.next({
				title,
				body,
				styleType: 'info',
				visible: false,
			});
		}, delay);
	}

	/**
	 *
	 * @param param - Params to fill toastr component
	 * @param delay - Defines visibility timeout, default 3000ms
	 */
	error({ title, body }: Toastr, delay = 3000): void {
		this.toastrData$.next({
			title,
			body,
			styleType: 'error',
			visible: true,
		});

		setTimeout(() => {
			this.toastrData$.next({
				title,
				body,
				styleType: 'error',
				visible: false,
			});
		}, delay);
	}
}
