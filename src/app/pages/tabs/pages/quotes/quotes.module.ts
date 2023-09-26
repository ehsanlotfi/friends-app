import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotesPageRoutingModule } from './quotes-routing.module';

import { QuotesPage } from './quotes.page';
import { ShareModule } from 'src/app/shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotesPageRoutingModule,
    ShareModule.forChild()
  ],
  declarations: [QuotesPage]
})
export class QuotesPageModule {}
