import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown } from './dropdown';

@NgModule({
	declarations: [Dropdown],
	exports: [Dropdown],
	imports: [CommonModule],
})
export class DropdownModule {}
