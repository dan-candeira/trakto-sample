import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout/layout';
import { DropdownModule } from './dropdown/module';
import { LoadingSpinner } from './loading-spinner/loading-spinner';

@NgModule({
	declarations: [Layout, LoadingSpinner],
	exports: [Layout, LoadingSpinner],
	imports: [CommonModule, DropdownModule],
})
export class ComponentsModule {}
