import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout/layout';
import { DropdownModule } from './dropdown/module';
import { LoadingSpinner } from './loading-spinner/loading-spinner';
import { RouterModule } from '@angular/router';
import { Trakto } from './trakto/trakto';
import { TraktoEdu } from './trakto-edu/trakto-edu';

@NgModule({
	declarations: [Layout, LoadingSpinner, Trakto, TraktoEdu],
	exports: [Layout, LoadingSpinner, Trakto, TraktoEdu],
	imports: [CommonModule, DropdownModule, RouterModule],
})
export class ComponentsModule {}
