import {Component, OnDestroy, OnInit} from '@angular/core';
import {Camera, SecurityCamerasData} from '@huecrm/core';
import {NbComponentSize, NbMediaBreakpointsService, NbThemeService} from '@nebular/theme';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';


@Component({
	selector: 'huecrm-security-cameras',
	styleUrls: ['./security-cameras.component.scss'],
	templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent implements OnInit, OnDestroy {
	
	cameras: Camera[];
	selectedCamera: Camera;
	isSingleView = false;
	actionSize: NbComponentSize = 'medium';
	private destroy$ = new Subject<void>();
	
	constructor(
		private themeService: NbThemeService,
		private breakpointService: NbMediaBreakpointsService,
		private securityCamerasService: SecurityCamerasData,
	) {
	}
	
	ngOnInit() {
		this.securityCamerasService.getCamerasData()
			.pipe(takeUntil(this.destroy$))
			.subscribe((cameras: Camera[]) => {
				this.cameras = cameras;
				this.selectedCamera = this.cameras[0];
			});
		
		const breakpoints = this.breakpointService.getBreakpointsMap();
		this.themeService.onMediaQueryChange()
			.pipe(map(([, breakpoint]) => breakpoint.width))
			.subscribe((width: number) => {
				this.actionSize = width > breakpoints.md ? 'medium' : 'small';
			});
	}
	
	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
	
	selectCamera(camera: any) {
		this.selectedCamera = camera;
		this.isSingleView = true;
	}
}
