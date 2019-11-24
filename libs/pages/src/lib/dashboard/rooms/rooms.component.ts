import {Component, HostBinding, OnDestroy} from '@angular/core';
import {NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService} from '@nebular/theme';
import {map} from 'rxjs/operators';

@Component({
	selector: 'huecrm-rooms',
	styleUrls: ['./rooms.component.scss'],
	template: `
        <nb-card [size]="breakpoint.width >= breakpoints.sm ? 'giant' : ''">
            <nb-icon icon="arrow-ios-downward" pack="eva"
                     (click)="collapse()"
                     class="collapse"
                     [hidden]="isCollapsed()">
            </nb-icon>
            <huecrm-room-selector [class.dark-background]="isDarkTheme" (select)="select($event)"></huecrm-room-selector>
            <huecrm-player [collapsed]="isCollapsed() && breakpoint.width <= breakpoints.md"></huecrm-player>
        </nb-card>
	`,
})
export class RoomsComponent implements OnDestroy {
	
	isDarkTheme: boolean;
	breakpoint: NbMediaBreakpoint;
	breakpoints: any;
	themeSubscription: any;
	themeChangeSubscription: any;
	@HostBinding('class.expanded')
	private expanded: boolean;
	private selected: number;
	
	constructor(private themeService: NbThemeService,
	            private breakpointService: NbMediaBreakpointsService) {
		
		this.breakpoints = this.breakpointService.getBreakpointsMap();
		this.themeSubscription = this.themeService.onMediaQueryChange()
			.subscribe(([, newValue]) => {
				this.breakpoint = newValue;
			});
		
		this.themeChangeSubscription = this.themeService.onThemeChange()
			.pipe(map(({name}) => name === 'cosmic' || name === 'dark'))
			.subscribe((isDark: boolean) => this.isDarkTheme = isDark);
	}
	
	select(roomNumber) {
		if (this.isSelected(roomNumber)) {
			this.expand();
		} else {
			this.collapse();
		}
		
		this.selected = roomNumber;
	}
	
	expand() {
		this.expanded = true;
	}
	
	collapse() {
		this.expanded = false;
	}
	
	isCollapsed() {
		return !this.expanded;
	}
	
	ngOnDestroy() {
		this.themeSubscription.unsubscribe();
		this.themeChangeSubscription.unsubscribe();
	}
	
	private isSelected(roomNumber): boolean {
		return this.selected === roomNumber;
	}
}
