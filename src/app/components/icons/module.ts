import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraktoIcon } from './trakto';
import { NotificationIcon } from './notification';
import { TraktoEduIcon } from './trakto-edu';
import { CalendarIcon } from './calendar';
import { CaretDownIcon } from './caret-down';

@NgModule({
	declarations: [
		TraktoIcon,
		NotificationIcon,
		TraktoEduIcon,
		CalendarIcon,
		CaretDownIcon,
	],
	exports: [
		TraktoIcon,
		NotificationIcon,
		TraktoEduIcon,
		CalendarIcon,
		CaretDownIcon,
	],
	imports: [CommonModule],
})
export class IconsModule {}
