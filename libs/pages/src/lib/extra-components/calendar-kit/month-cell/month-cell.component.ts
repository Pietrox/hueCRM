import {TranslationWidth} from '@angular/common';
import {Component, EventEmitter} from '@angular/core';
import {NbCalendarCell, NbCalendarDayPickerComponent, NbCalendarMonthModelService, NbDateService,} from '@nebular/theme';

@Component({
	selector: 'huecrm-calendar-kit-month-cell',
	styleUrls: ['month-cell.component.scss'],
	templateUrl: 'month-cell.component.html',
})
export class CalendarKitMonthCellComponent extends NbCalendarDayPickerComponent<Date, Date>
	implements NbCalendarCell<Date, Date> {
	select: EventEmitter<Date> = new EventEmitter();
	selectedValue: Date;
	
	constructor(private dateService: NbDateService<Date>, monthModel: NbCalendarMonthModelService<Date>) {
		super(monthModel);
	}
	
	get title() {
		return this.dateService.getMonthName(this.date, TranslationWidth.Wide);
	}
}
