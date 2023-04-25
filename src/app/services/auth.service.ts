import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
	constructor() {}

	public isAuthenticated(): boolean {
		const token = localStorage.getItem('trakto-token');
		// Check whether the token is expired and return
		// true or false
		if (token) {
			return true;
		}

		return false;
	}
}
