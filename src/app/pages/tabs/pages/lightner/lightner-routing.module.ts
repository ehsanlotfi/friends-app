import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightnerPage } from './lightner.page';

const routes: Routes = [
  {
    path: '',
    component: LightnerPage,
    
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightnerPageRoutingModule {}
