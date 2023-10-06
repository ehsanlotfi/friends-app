import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickStudyPageRoutingModule } from './quick-study-routing.module';

import { QuickStudyPage } from './quick-study.page';
import { ShareModule } from 'src/app/shared/share.module';
import { LightnerService } from 'src/app/services/lightner.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickStudyPageRoutingModule,
    ShareModule.forChild()
  ],
  declarations: [QuickStudyPage],
  providers:[LightnerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuickStudyPageModule {}
