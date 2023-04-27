import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateService } from './state.service';

@Injectable({
	providedIn: 'root',
})
export class DesignService {
	constructor(private http: HttpClient, private state: StateService) {}

	loadLatestDesigns(): Observable<any> {
		this.state.setLoading(true);
		return this.http
			.get(
				`${environment.baseUrl}/document?total_per_page=10&order_by=title&order_orientation=desc`,
				{
					headers: {
						Authorization: `Bearer ${
							localStorage.getItem('access_token') || ''
						}`,
						Accept: '*/*',
					},
				}
			)
			.pipe(
				tap(() => {
					this.state.setLoading(false);
				})
			);
	}

	loadAllDesigns(): Observable<any> {
		this.state.setLoading(true);
		return this.http
			.get(
				`${environment.baseUrl}/document?order_by=updated_at&order_orientation=desc`,
				{
					headers: {
						Authorization: `Bearer ${
							localStorage.getItem('access_token') || ''
						}`,
						Accept: '*/*',
					},
				}
			)
			.pipe(
				tap(() => {
					this.state.setLoading(false);
				})
			);
	}
}
