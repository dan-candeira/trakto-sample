import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
	constructor(private jwt: JwtHelperService) {}

	public isAuthenticated(): boolean {
		const token = localStorage.getItem('access_token');
		if (token) {
			// Check whether the token is expired and return
			// true or false
			return !this.jwt.isTokenExpired(token);
		}

		return false;
	}

	logout(): void {
		localStorage.removeItem('access_token');
	}
}
