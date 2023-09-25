import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component"
const routes: Routes = [
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
      },
      {
        path: 'singup',
        loadChildren: () => import('./pages/singup/singup.module').then( m => m.SingupPageModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
      },
    ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule { }
