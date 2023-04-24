import {
	AfterContentInit,
	Component,
	ContentChild,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { DropdownButton } from './dropdown-button';
import { Subject, takeUntil } from 'rxjs';

import { DropdownContent } from './dropdown-content';
import { TraktoDropdownEvents } from './dropdown-events';

@Component({
	selector: 'trakto-dropdown',
	templateUrl: './dropdown.html',
	styleUrls: ['./dropdown.scss'],
	host: {
		class: 'dropdown',
	},
})
export class Dropdown
	extends TraktoDropdownEvents
	implements OnInit, AfterContentInit, OnDestroy
{
	@ContentChild(DropdownButton, { static: true })
	dropdownButton!: DropdownButton;
	@ContentChild(DropdownContent, { static: true })
	dropdownContent!: DropdownContent;

	destroy$: Subject<void> = new Subject();

	isOpen = false;

	ngOnInit(): void {
		this.focusEvents.pipe(takeUntil(this.destroy$)).subscribe(() => {
			this.setOpen(false);
		});
	}

	ngAfterContentInit(): void {
		this.dropdownButton.clicked
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.setOpen();
			});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
	}

	setOpen(value?: boolean) {
		this.isOpen = value !== undefined ? value : !this.isOpen;
		this.dropdownButton.setAriaExpanded(this.isOpen);
		this.dropdownContent.changeVisibility(this.isOpen);
		this.dropdownContent.setFocus();
	}
}
