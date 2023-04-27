import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'trakto-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private titleService: Title,
		private router: Router
	) {
		this.titleService.setTitle('Logout • Trakto');
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.authService.logout();
			this.router.navigate(['login']);
		}, 2000);
	}
}
