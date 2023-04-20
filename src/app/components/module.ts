import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout/layout';
import { DropdownModule } from './dropdown/module';
import { LoadingSpinner } from './loading-spinner/loading-spinner';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/module';

@NgModule({
	declarations: [Layout, LoadingSpinner],
	exports: [Layout, LoadingSpinner],
	imports: [CommonModule, DropdownModule, RouterModule, IconsModule],
})
export class ComponentsModule {}
