import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'huecrm-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})

export class LeadsComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: String,
      },
      email: {
        title: 'Email',
        type: String,
      },
      address: {
        title: 'Address',
        type: String,
      },
      phone: {
        title: 'Address',
        type: String,
      },
      created: {
        title: 'Created Date',
        type: Date,
      },
      owner: {
        title: 'Assigned To',
        type: String,
      }
    }
  };
  
  source = this.getAllLeads();
  spinner = true;
  
  constructor(private http: HttpClient) {
  }
  
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  ngOnInit() {
    this.getAllLeads();
    this.spinner = false;
    console.log(this.source);
  }
  
  getAllLeads() {
    return this.http.get(environment.BACKEND_URL + environment.API_ALL_LEADS);
  }
}
