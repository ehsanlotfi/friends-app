import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as _partials from 'src/app/partials/index';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  declarations: [
    _partials.HeaderComponent,
    _partials.layouts,
    _partials.EpisodListComponent,
    HideHeaderDirective,
    ParallaxDirective
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
    _partials.HeaderComponent,
    _partials.layouts,
    _partials.EpisodListComponent,
    HideHeaderDirective,
    ParallaxDirective

   
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
