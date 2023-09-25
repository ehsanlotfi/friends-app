import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfSerailsPageRoutingModule } from './list-of-serial-routing.module';

import { ListOfSerailsPage } from './list-of-serial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfSerailsPageRoutingModule
  ],
  declarations: [ListOfSerailsPage]
})
export class ListOfSeralisPageModule {}
