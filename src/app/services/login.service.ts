import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

interface LoginData {
	email: string;
	password: string;
}

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private http: HttpClient) {}

	login(loginData: LoginData): Observable<any> {
		return this.http.post(`${environment.baseUrl}/auth/signin`, loginData);
	}
}
