import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerialDetailsPageRoutingModule } from './serial-details-routing.module';

import { SerialDetailsPage } from './serial-details.page';
import { listOfPartComponent } from '../components/list-of-part.component.';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerialDetailsPageRoutingModule
  ],
  declarations: [SerialDetailsPage,listOfPartComponent]
})
export class SerialDetailsPageModule {}
