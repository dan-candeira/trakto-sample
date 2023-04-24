import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from './carousel';
import { CarouselButtonNext, CarouselButtonPrevious } from './carousel-buttons';
import { CarouselItem } from './carousel-item';

@NgModule({
	declarations: [
		Carousel,
		CarouselButtonNext,
		CarouselButtonPrevious,
		CarouselItem,
	],
	exports: [
		Carousel,
		CarouselButtonNext,
		CarouselButtonPrevious,
		CarouselItem,
	],
	imports: [CommonModule],
})
export class CarouselModule {}
