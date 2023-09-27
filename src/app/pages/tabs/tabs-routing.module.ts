import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsPageModule)
      },
      {
        path: 'seassons',
        loadChildren: () => import('./pages/seassons/seassons.module').then(m => m.SeassonsPageModule)
      },
      {
        path: ':seasonId/detail',
        loadChildren: () => import('./pages/season-deatails/season-deatails.module').then( m => m.SeasonDeatailsPageModule)
      },
      {
        path: ':seasonId/episods',
        loadChildren: () => import('./pages/episods/episods.module').then( m => m.EpisodsPageModule)
      },
      {
        path: ':seasonId/episods/:episodeId',
        loadChildren: () => import('./pages/quotes/quotes.module').then( m => m.QuotesPageModule)
      },
      {
        path: 'lightner',
        loadChildren: () => import('./pages/lightner/lightner.module').then( m => m.LightnerPageModule)
      },
    ],
  },
 

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
