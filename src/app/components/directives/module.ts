import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TraktoFocusEvents } from './focus-events';

@NgModule({
	exports: [TraktoFocusEvents],
	imports: [CommonModule],
	declarations: [TraktoFocusEvents],
})
export class PctDirectiveModule {}
