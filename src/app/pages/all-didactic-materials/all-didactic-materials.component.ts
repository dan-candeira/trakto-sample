import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DesignService } from '@services/design.service';
import { State, StateService } from '@services/state.service';
import { ToastrService } from '@services/toastr.service';
import {
	BehaviorSubject,
	Observable,
	catchError,
	map,
	of,
	switchMap,
	tap,
} from 'rxjs';

@Component({
	selector: 'trakto-all-didactic-materials',
	templateUrl: './all-didactic-materials.component.html',
	styleUrls: ['./all-didactic-materials.component.scss'],
})
export class AllDidacticMaterialsComponent {
	notFound$: BehaviorSubject<boolean> = new BehaviorSubject(true);
	state$: Observable<State> = this.state.getState();
	designNotFound$: Observable<boolean> = this.notFound$.pipe(
		switchMap((emptyData) => {
			return this.state$.pipe(
				map((_state) => !_state.loading && emptyData)
			);
		})
	);

	designList$: Observable<any> = this.designService.loadAllDesigns().pipe(
		map(
			(resp: {
				data: any[];
				hasNextPage: boolean;
				hasPreviousPage: boolean;
			}) =>
				resp.data.map((design) => ({
					...design,
					editorLink: `https://editor.trakto.io/presentation/p/${design.id}`,
					slidesCount: design?.pages?.length,
				})) || []
		),
		catchError((error) => {
			this.toastr.error({
				title: 'Erro no carreganto dos designs',
				body: 'Desculpe, ocorreu um erro no carragamento dos seus designs, se o problema persistir entrem em contato com nosso suporte.',
			});
			return of([]);
		}),
		tap((data) => {
			if (!data?.length) {
				this.notFound$.next(true);
			} else {
				this.notFound$.next(false);
			}
		})
	);

	constructor(
		private titleService: Title,
		private designService: DesignService,
		private toastr: ToastrService,
		private state: StateService
	) {
		this.titleService.setTitle('Material didático - Ver todos • Trakto');
	}
}
