import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraktoIcon } from './trakto';
import { NotificationIcon } from './notification';
import { TraktoEduIcon } from './trakto-edu';
import { CalendarIcon } from './calendar';
import { CaretDownIcon } from './caret-down';
import { CaretLeftIcon } from './caret-left';
import { CaretRightIcon } from './caret-right';
import { YoutubeIcon } from './youtube';

@NgModule({
	declarations: [
		TraktoIcon,
		NotificationIcon,
		TraktoEduIcon,
		CalendarIcon,
		CaretDownIcon,
		CaretLeftIcon,
		CaretRightIcon,
		YoutubeIcon,
	],
	exports: [
		TraktoIcon,
		NotificationIcon,
		TraktoEduIcon,
		CalendarIcon,
		CaretDownIcon,
		CaretLeftIcon,
		CaretRightIcon,
		YoutubeIcon,
	],
	imports: [CommonModule],
})
export class IconsModule {}
