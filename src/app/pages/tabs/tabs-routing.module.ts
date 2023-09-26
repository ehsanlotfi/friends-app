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
    ],
  },
 

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
