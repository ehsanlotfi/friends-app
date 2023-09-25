import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './directives/parallax.directive';
import { HideHeaderDirective } from './directives/hide-header.directive';


@NgModule({
  declarations: [
    ParallaxDirective,
    HideHeaderDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParallaxDirective,
    HideHeaderDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule {

  static forRoot() {
    return {
      ngModule: ShareModule,
    }
  }

  static forChild() {
    return {
      ngModule: ShareModule,
    }
  }

}
