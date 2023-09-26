import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodsPageRoutingModule } from './episods-routing.module';

import { EpisodsPage } from './episods.page';
import { ShareModule } from 'src/app/shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodsPageRoutingModule,
    ShareModule.forChild()
  ],
  declarations: [EpisodsPage]
})
export class EpisodsPageModule {}
