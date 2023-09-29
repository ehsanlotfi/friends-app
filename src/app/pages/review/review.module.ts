import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPageRoutingModule } from './review-routing.module';

import { ReviewPage } from './review.page';
import { LightnerService } from 'src/app/services/lightner.service';
import { ShareModule } from 'src/app/shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewPageRoutingModule,
    ShareModule.forChild()
  ],
  declarations: [ReviewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[LightnerService]
})
export class ReviewPageModule {}
