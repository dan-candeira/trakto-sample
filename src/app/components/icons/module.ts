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
import { LogoutIcon } from './logout';

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
		LogoutIcon,
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
		LogoutIcon,
	],
	imports: [CommonModule],
})
export class IconsModule {}
