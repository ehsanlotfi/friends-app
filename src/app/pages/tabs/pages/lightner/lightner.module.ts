import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightnerPageRoutingModule } from './lightner-routing.module';

import { LightnerPage } from './lightner.page';
import { ShareModule } from 'src/app/shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightnerPageRoutingModule,
    ShareModule.forChild()
  ],
  declarations: [LightnerPage]
})
export class LightnerPageModule {}
