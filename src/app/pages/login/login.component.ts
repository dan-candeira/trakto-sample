import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from '@services/login.service';
import { ToastrService } from '@services/toastr.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'trakto-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
	login: FormGroup = new FormGroup({
		email: new FormControl(null, [Validators.email, Validators.required]),
		password: new FormControl(null, [Validators.required]),
	});

	alertMessage = '';
	subscription!: Subscription;
	loading = false;

	constructor(
		private loginService: LoginService,
		private toastr: ToastrService,
		private router: Router,
		private titleService: Title
	) {
		this.titleService.setTitle('Login • Trakto');
	}

	submit(): void {
		this.alertMessage = '';

		if (!this.login.valid) {
			this.login.markAllAsTouched();
			this.alertMessage = `Alguns campos do formário, estão inválidos.
			Por favor verifique os valores preenchidos e tente novamente.`;
			return;
		}

		this.loading = true;
		const _loginData = this.login.getRawValue();
		this.subscription = this.loginService.login(_loginData).subscribe({
			next: (resp) => {
				console.log({ resp });
				if (resp.access_token) {
					localStorage.setItem('access_token', resp.access_token);
				}
				setTimeout(() => {
					this.loading = false;
					this.router.navigate(['/']);
				}, 1000);
			},
			error: (_error: HttpErrorResponse) => {
				this.loading = false;

				if (_error.status === 401) {
					this.toastr.error(
						{
							title: 'Erro ao realizar login',
							body: `Dados de login inválidos.
							Por favor verifique se os dados que você preencheu estão corretos e tente novamente.`,
						},
						5000
					);

					return;
				}

				this.toastr.error({
					title: 'Erro ao realizar login',
					body: `Desculpe aconteceu um erro ao tentar realizar seu login, tente novamente.`,
				});
			},
		});
		console.log(_loginData);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
