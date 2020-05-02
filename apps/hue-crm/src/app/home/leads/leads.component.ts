import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'huecrm-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})

export class LeadsComponent implements OnInit {
  settings = undefined;
  
  data = undefined;
  spinner = true;
  
  constructor(private http: HttpClient) {
	this.setColumns();
	this.getAllLeads();
  }
  
  onDeleteConfirm(event): void {
	if (window.confirm('Are you sure you want to delete?')) {
	  event.confirm.resolve();
	} else {
	  event.confirm.reject();
	}
  }
  
  ngOnInit() {
	
	this.spinner = false;
  
  }
  
  setColumns() {
	return this.http.get(environment.BACKEND_URL + environment.API_MODEL_LEAD_COLUMN)
	  .subscribe(response => {
		this.settings = response;
	  });
  }
  
  getAllLeads() {
	return this.http.get(environment.BACKEND_URL + environment.API_ALL_LEADS)
	  .subscribe(response => {
		this.data = response;
	  });
  }
}
