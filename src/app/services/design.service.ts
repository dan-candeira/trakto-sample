import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class DesignService {
	constructor(private http: HttpClient) {}

	loadLatestDesigns(): Observable<any> {
		return this.http.get(
			`${environment.baseUrl}/document?total_per_page=10&order_by=title&order_orientation=desc`,
			{
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem('access_token') || ''
					}`,
					Accept: '*/*',
				},
			}
		);
	}
}
