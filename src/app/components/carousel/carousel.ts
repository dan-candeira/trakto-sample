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
} from '@angular/core';
import { Subject, debounceTime, startWith, takeUntil } from 'rxjs';
import { CarouselButtonNext, CarouselButtonPrevious } from './carousel-buttons';
import { CarouselItem } from './carousel-item';

@Component({
	selector: 'trakto-carousel',
	template: `<ng-content></ng-content>`,
	styles: [],
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

	nextIndex: number | undefined;
	previousIndex: number | undefined;

	constructor(private elementRef: ElementRef<HTMLElement>) {}

	ngOnInit(): void {
		if (this.carouselPrevious) {
			this.carouselPrevious.clicked.subscribe((e) => {
				console.log('Previous', e);
				if (this.previousIndex === undefined) {
					return;
				}
				this.carouselItems.toArray()[this.previousIndex].setFocus();
			});
		}

		if (this.carrouselNext) {
			this.carrouselNext.clicked.subscribe((e) => {
				console.log('Next', e);
				if (!this.nextIndex) {
					return;
				}
				console.log(this.carouselItems.toArray()[this.nextIndex]);
				this.carouselItems.toArray()[this.nextIndex].setFocus();
			});
		}

		this.resizeEvent$
			.pipe(takeUntil(this.destroy$), debounceTime(300))
			.subscribe(() => {
				this.updateCarousel();
			});
	}

	ngAfterContentInit(): void {
		this.carouselItems.changes
			.pipe(startWith(this.carouselItems), takeUntil(this.destroy$))
			.subscribe((carouselItems: QueryList<CarouselItem>) => {
				console.log(carouselItems.length);
				this.updateCarousel();
			});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
	}

	updateCarousel(): void {
		const visibleWidth = this.elementRef.nativeElement.clientWidth;
		const carouselItem = this.carouselItems.toArray()[0];
		const visibleItemsAmount = Math.floor(
			visibleWidth / carouselItem.elementRef.nativeElement.clientWidth
		);

		// check calculations
		if (this.nextIndex === undefined) {
			this.previousIndex = 0;
		} else {
			this.previousIndex = this.nextIndex;
		}

		this.nextIndex = visibleItemsAmount;
	}
}
