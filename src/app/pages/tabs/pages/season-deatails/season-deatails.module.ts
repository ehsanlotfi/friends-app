import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonDeatailsPageRoutingModule } from './season-deatails-routing.module';

import { SeasonDeatailsPage } from './season-deatails.page';
import { ShareModule } from 'src/app/shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasonDeatailsPageRoutingModule,
    ShareModule.forChild()
  ],
  declarations: [SeasonDeatailsPage]
})
export class SeasonDeatailsPageModule {}
