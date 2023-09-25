import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartDetailsPageRoutingModule } from './part-details-routing.module';

import { PartDetailsPage } from './part-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartDetailsPageRoutingModule
  ],
  declarations: [PartDetailsPage]
})
export class PartDetailsPageModule {}
