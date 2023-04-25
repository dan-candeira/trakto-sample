import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from './carousel';
import { CarouselPagingButton } from './carousel-button';
import { CarouselItem } from './carousel-item';

@NgModule({
	declarations: [Carousel, CarouselPagingButton, CarouselItem],
	exports: [Carousel, CarouselPagingButton, CarouselItem],
	imports: [CommonModule],
})
export class CarouselModule {}
