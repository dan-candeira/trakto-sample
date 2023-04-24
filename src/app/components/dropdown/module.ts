import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown } from './dropdown';
import { DropdownButton } from './dropdown-button';
import { DropdownContent } from './dropdown-content';

@NgModule({
	declarations: [Dropdown, DropdownButton, DropdownContent],
	exports: [Dropdown, DropdownButton, DropdownContent],
	imports: [CommonModule],
})
export class DropdownModule {}
