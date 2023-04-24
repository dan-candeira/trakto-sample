import { Component } from '@angular/core';

@Component({
	selector: 'trakto-didactic-materials',
	templateUrl: './didactic-materials.component.html',
	styleUrls: ['./didactic-materials.component.scss'],
})
export class DidacticMaterialsComponent {
	fakeData = Array.from({ length: 10 }, (_, i) => i);
}
