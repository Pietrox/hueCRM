import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	RouterModule,
	NbAlertModule,
	NbInputModule,
	NbButtonModule,
	NbCheckboxModule,
	AuthRoutingModule
  ],
  declarations: [
	LoginComponent
  ]
})
export class AuthModule {

}
