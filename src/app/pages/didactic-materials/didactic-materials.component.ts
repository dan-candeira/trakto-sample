import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DesignService } from '@services/design.service';
import { ToastrService } from '@services/toastr.service';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';

@Component({
	selector: 'trakto-didactic-materials',
	templateUrl: './didactic-materials.component.html',
	styleUrls: ['./didactic-materials.component.scss'],
})
export class DidacticMaterialsComponent {
	designNotFound$: BehaviorSubject<boolean> = new BehaviorSubject(true);

	designList$: Observable<any> = this.designService.loadLatestDesigns().pipe(
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
				this.designNotFound$.next(true);
			} else {
				this.designNotFound$.next(false);
			}
		})
	);

	videoData$ = of([
		{
			cover: 'assets/video-thumbs/adicionar-fonte-externa.jpg',
			videoLink: 'https://youtu.be/Bws10uNmwpM',
			title: 'Como Fazer upload de FONTE na Trakto de forma gratuita',
		},
		{
			cover: 'assets/video-thumbs/comece-com-trakto.jpg',
			videoLink: 'https://youtu.be/PNYMBdiDlps',
			title: 'Como usar a Trakto? Tutorial gratuito para iniciantes',
		},
		{
			cover: 'assets/video-thumbs/escolhendo-formato-ideal.jpg',
			videoLink: 'https://youtu.be/Bws10uNmwpM',
			title: 'Aprenda agora como escolher o formato ideal para o seu design com a Trakto',
		},
		{
			cover: 'assets/video-thumbs/inserir-remover-fundo.jpg',
			videoLink: 'https://youtu.be/gB8Bc8cboxQ',
			title: 'Como remover o fundo e adicionar imagens na Trakto',
		},
		{
			cover: 'assets/video-thumbs/mudar-cores-fontes.jpg',
			videoLink: 'https://youtu.be/6d3rbLXVF3I',
			title: 'Como escolher as melhores cores e fontes para sua arte com a Trakto',
		},
		{
			cover: 'assets/video-thumbs/publicar-trakto-link.jpg',
			videoLink: 'https://youtu.be/1oKuM-S4Tcc',
			title: 'Aprenda agora como criar e publicar o Trakto Link',
		},
	]);

	constructor(
		private titleService: Title,
		private designService: DesignService,
		private toastr: ToastrService
	) {
		this.titleService.setTitle('Material didático • Trakto');
	}
}
