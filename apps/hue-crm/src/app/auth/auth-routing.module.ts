import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NbAuthComponent} from '@nebular/auth';
import {environment} from '../../environments/environment';
import {LoginComponent} from './login/login.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: environment.LOGIN_URL,
        component: LoginComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
})
export class AuthRoutingModule {
}
