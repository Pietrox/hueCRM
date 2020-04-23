import { Component, OnDestroy } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { MenuItems } from '../home-menu';

@Component({
  selector: 'huecrm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy {
  menuItems = MenuItems;
  selectedItem: string;
  private alive = true;
  
  constructor(private menuService: NbMenuService) {
  }
  
  ngOnDestroy() {
	this.alive = false;
  }
  
  collapseAll() {
	this.menuService.collapseAll('menu');
  }
  
  navigateHome() {
	this.menuService.navigateHome('menu');
  }
  
  getSelectedItem() {
	this.menuService.getSelectedItem('menu')
	  .pipe(takeWhile(() => this.alive))
	  .subscribe((menuBag) => {
		this.selectedItem = menuBag.item.title;
	  });
  }
  
}
