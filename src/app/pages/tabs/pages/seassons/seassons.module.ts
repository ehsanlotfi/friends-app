import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeassonsPageRoutingModule } from './seassons-routing.module';

import { SeassonsPage } from './seassons.page';
import { ShareModule } from 'src/app/shared/share.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeassonsPageRoutingModule,
    ShareModule.forChild()
  ],
  declarations: [SeassonsPage]
})
export class SeassonsPageModule {}
