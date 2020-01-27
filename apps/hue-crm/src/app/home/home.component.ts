import {Component, OnInit} from '@angular/core';
import {MenuItems} from './home-menu';

@Component({
  selector: 'huecrm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  menu = MenuItems;
  
  ngOnInit() {
  
  }
}
