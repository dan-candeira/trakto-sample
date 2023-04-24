import {
	OnInit,
	Component,
	HostListener,
	Input,
	ContentChildren,
	AfterContentInit,
	QueryList,
	OnDestroy,
	ElementRef,
	ViewEncapsulation,
} from '@angular/core';
import { Subject, debounceTime, startWith, takeUntil } from 'rxjs';
import { CarouselButtonNext, CarouselButtonPrevious } from './carousel-buttons';
import { CarouselItem } from './carousel-item';

@Component({
	selector: 'trakto-carousel',
	template: `<ng-content></ng-content>`,
	styles: [],
	encapsulation: ViewEncapsulation.None,
})
export class Carousel implements OnInit, AfterContentInit, OnDestroy {
	// next and previous buttons input
	@Input() carrouselNext!: CarouselButtonNext;
	@Input() carouselPrevious!: CarouselButtonPrevious;

	resizeEvent$: Subject<any> = new Subject();
	destroy$: Subject<void> = new Subject();

	@ContentChildren(CarouselItem) carouselItems: QueryList<CarouselItem> =
		new QueryList();

	@HostListener('window:resize', ['$event']) handleResize(event: any) {
		console.log(event);
		this.resizeEvent$.next(event);
	}

	currentIndex: number = 0;
	visibleAmount: number = 0;

	constructor(private elementRef: ElementRef<HTMLElement>) {
		this.elementRef.nativeElement.classList.add('carousel');
	}

	ngOnInit(): void {
		if (this.carouselPrevious) {
			this.carouselPrevious.clicked.subscribe((e) => {
				this.previous();
			});
		}

		if (this.carrouselNext) {
			this.carrouselNext.clicked.subscribe((e) => {
				this.next();
			});
		}

		this.resizeEvent$
			.pipe(takeUntil(this.destroy$), debounceTime(300))
			.subscribe(() => {
				this.updateCarousel();
				this.carouselItems
					.toArray()[0]
					?.elementRef.nativeElement.focus();
			});
	}

	ngAfterContentInit(): void {
		this.carouselItems.changes
			.pipe(startWith(this.carouselItems), takeUntil(this.destroy$))
			.subscribe(() => {
				this.updateCarousel();
			});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
	}

	updateCarousel(): void {
		const visibleWidth = this.elementRef.nativeElement.clientWidth;
		const carouselItem = this.carouselItems.toArray()[0];
		this.visibleAmount = Math.floor(
			visibleWidth / carouselItem.elementRef.nativeElement.clientWidth
		);

		this.currentIndex = 0;
	}

	next(): void {
		const _index = this.currentIndex + this.visibleAmount;
		this.currentIndex = Math.min(_index, this.carouselItems.length - 1);

		this.carouselItems.toArray()[this.currentIndex]?.setFocus();
	}

	previous(): void {
		const _index = this.currentIndex - this.visibleAmount;
		this.currentIndex = Math.max(_index, 0);

		this.carouselItems.toArray()[this.currentIndex]?.setFocus();
	}
}
