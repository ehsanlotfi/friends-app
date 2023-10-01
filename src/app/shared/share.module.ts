import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as _partials from 'src/app/partials/index';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { ParallaxDirective } from './directives/parallax.directive';
import { HttpClientModule } from '@angular/common/http';
import { highlightPipe } from '../pipe/highlight.pipe';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { register } from 'swiper/element/bundle';

@NgModule({
  declarations: [
    _partials.HeaderComponent,
    _partials.layouts,
    _partials.EpisodListComponent,
    HideHeaderDirective,
    ParallaxDirective,
    highlightPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot()
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
    highlightPipe,
    HideHeaderDirective,
    ParallaxDirective,
    HttpClientModule,
    NgCircleProgressModule


   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule {
 constructor(){
  register();
 }
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
