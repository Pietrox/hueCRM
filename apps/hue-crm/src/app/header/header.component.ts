import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbIconConfig, NbMenuService, NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'huecrm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class HeaderComponent implements OnInit {
  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  user = undefined;
  constructor(private authService: NbAuthService,
			  private sidebarService: NbSidebarService,
			  private menuService: NbMenuService
  ) {
	this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
	  if (token.isValid()) {
		this.user = token.getPayload();
	  }
	});
  }
  
  ngOnInit() {
  }
  
  toggleSidebar(): boolean {
	this.sidebarService.toggle(true, 'menu-sidebar');
	return false;
  }
  
  navigateHome() {
	this.menuService.navigateHome();
	return false;
  }
}
