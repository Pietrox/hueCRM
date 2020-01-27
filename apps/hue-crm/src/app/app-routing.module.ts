import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.HOME_URL,
    pathMatch: 'full',
  },
  {
    path: environment.HOME_URL,
    loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: environment.AUTH_URL,
    loadChildren: () => import('./auth/auth.module')
        .then(m => m.AuthModule),
  },
  {
    path: '**', redirectTo: environment.HOME_URL,
  }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
