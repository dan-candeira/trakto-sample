import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraktoIcon } from './trakto';
import { NotificationIcon } from './notification';
import { TraktoEduIcon } from './trakto-edu';
import { CalendarIcon } from './calendar';

@NgModule({
	declarations: [TraktoIcon, NotificationIcon, TraktoEduIcon, CalendarIcon],
	exports: [TraktoIcon, NotificationIcon, TraktoEduIcon, CalendarIcon],
	imports: [CommonModule],
})
export class IconsModule {}
