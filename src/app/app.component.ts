import { Component, TemplateRef } from '@angular/core';
import { Toastr, ToastrService } from '@services/toastr.service';
import { Observable, tap } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'trakto-sample';
	toastr$: Observable<Toastr>;
	alertMessage: string = '';
	templateAlertMessage!: TemplateRef<any>;
	isTemplate = false;

	constructor(private toastr: ToastrService) {
		this.toastr$ = toastr.toastrData$.pipe(
			tap((data) => {
				if (typeof data.body === 'string') {
					this.alertMessage = data.body;
				} else {
					this.templateAlertMessage = data.body;
				}
			})
		);
	}
}
