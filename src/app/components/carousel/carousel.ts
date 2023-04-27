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
import { CarouselPagingButton } from './carousel-button';
import { CarouselItem } from './carousel-item';

@Component({
	selector: 'trakto-carousel',
	template: `<ng-content></ng-content>`,
	styles: [],
	encapsulation: ViewEncapsulation.None,
})
export class Carousel implements OnInit, AfterContentInit, OnDestroy {
	// next and previous buttons input
	@Input() carrouselNext!: CarouselPagingButton;
	@Input() carouselPrevious!: CarouselPagingButton;

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

		const _carouselFirstChild = this.carouselItems.toArray()[0];
		const _carouselSecondChild = this.carouselItems.toArray()[1];

		if (!_carouselFirstChild || !_carouselSecondChild) {
			return;
		}

		const _gap = this.calcSpaceBetween(
			_carouselFirstChild,
			_carouselSecondChild
		);

		const _childSize =
			_carouselFirstChild.elementRef.nativeElement.clientWidth + _gap;

		this.visibleAmount = Math.floor(visibleWidth / _childSize);

		this.currentIndex = 1;

		// reset carousel position
		// without animation
		this.carouselItems.toArray()[this.currentIndex].setFocus();
	}

	next(): void {
		const _index = this.currentIndex + this.visibleAmount;
		this.currentIndex = Math.min(_index, this.carouselItems.length - 1);

		this.carouselItems.toArray()[this.currentIndex]?.scrollTo();
	}

	previous(): void {
		const _index = this.currentIndex - this.visibleAmount;
		this.currentIndex = Math.max(_index, 0);

		this.carouselItems.toArray()[this.currentIndex]?.scrollTo();
	}

	calcSpaceBetween(el: CarouselItem, sibling: CarouselItem): number {
		const _elPosition =
			el.elementRef.nativeElement.offsetLeft +
			el.elementRef.nativeElement.clientWidth;

		const _siblingPosition = sibling.elementRef.nativeElement.offsetLeft;

		return _siblingPosition - _elPosition;
	}
}
