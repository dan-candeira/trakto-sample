import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout/layout';
import { DropdownModule } from './dropdown/module';
import { LoadingSpinner } from './loading-spinner/loading-spinner';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/module';
import { CarouselModule } from './carousel/module';
import { ToastrComponent } from './toastr/toastr.component';

@NgModule({
	declarations: [Layout, LoadingSpinner, ToastrComponent],
	imports: [
		CommonModule,
		DropdownModule,
		RouterModule,
		IconsModule,
		CarouselModule,
	],
	exports: [
		Layout,
		LoadingSpinner,
		IconsModule,
		DropdownModule,
		CarouselModule,
		ToastrComponent,
	],
})
export class ComponentsModule {}
