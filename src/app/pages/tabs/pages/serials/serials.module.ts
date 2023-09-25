import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerialsPageRoutingModule } from './serials-routing.module';

import { SerialsPage } from './serials.page';
import { ShareModule } from 'src/app/shared/share.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerialsPageRoutingModule,
    ShareModule,
  ],
  declarations: [SerialsPage]
})
export class SerialsPageModule {}
