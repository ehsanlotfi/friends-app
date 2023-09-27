import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/seassons',
    pathMatch: 'full'
  },
  {
		path: 'intro',
		loadChildren: () => import('./pages/intro/intro.module').then((m) => m.IntroPageModule),  
	},
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canLoad: [IntroGuard]
  },
  {
    path: 'review',
    loadChildren: () => import('./pages/review/review.module').then( m => m.ReviewPageModule),
    canLoad: [IntroGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
