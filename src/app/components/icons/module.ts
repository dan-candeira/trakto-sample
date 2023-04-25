import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraktoIcon } from './trakto';
import { NotificationIcon } from './notification';
import { TraktoEduIcon } from './trakto-edu';
import { CalendarIcon } from './calendar';
import { CaretDownIcon } from './caret-down';
import { CaretLeftIcon } from './caret-left';
import { CaretRightIcon } from './caret-right';

@NgModule({
	declarations: [
		TraktoIcon,
		NotificationIcon,
		TraktoEduIcon,
		CalendarIcon,
		CaretDownIcon,
		CaretLeftIcon,
		CaretRightIcon,
	],
	exports: [
		TraktoIcon,
		NotificationIcon,
		TraktoEduIcon,
		CalendarIcon,
		CaretDownIcon,
		CaretLeftIcon,
		CaretRightIcon,
	],
	imports: [CommonModule],
})
export class IconsModule {}
