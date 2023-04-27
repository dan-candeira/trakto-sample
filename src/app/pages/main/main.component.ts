import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'trakto-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent {
	/* brand-light-blue
brand-light-green
brand-light-pink
brand-light-orange
	 */
	modules = [
		{
			title: 'Material didático',
			image: 'assets/study-book.png',
			link: '/material-didatico',
			colorStyles: `--color-inner-ring: var(--color-brand-light-blue);`,
		},
		{
			title: 'Quiz',
			image: 'assets/medal.png',
			link: '/',
			colorStyles: `--color-inner-ring: var(--color-brand-light-green);`,
		},
		{
			title: 'Desenho',
			image: 'assets/paint.png',
			link: '/',
			colorStyles: `--color-inner-ring: var(--color-brand-light-pink);`,
		},
		{
			title: 'Youtube',
			image: 'assets/youtube.png',
			link: '/',
			colorStyles: `--color-inner-ring: var(--color-brand-light-orange);`,
		},
	];

	constructor(private titleService: Title) {
		this.titleService.setTitle('Selecionar módulo • Trakto');
	}
}
