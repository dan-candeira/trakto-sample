import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// should be a store with ngrx
// but for time sake
// it will be a service

export interface State {
	loading: boolean;
	error: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class StateService {
	_state = {
		loading: false,
		error: false,
	};

	state$: BehaviorSubject<State> = new BehaviorSubject(this._state);

	getState(): Observable<State> {
		return this.state$.asObservable();
	}

	setLoading(value: boolean): void {
		const _state = this.state$.value;
		this.state$.next({ ..._state, loading: value });
	}

	setError(value: boolean): void {
		const _state = this.state$.value;
		this.state$.next({ ..._state, error: value });
	}
}
