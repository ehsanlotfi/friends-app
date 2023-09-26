import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as _partials from 'src/app/partials/index';

@NgModule({
  declarations: [
    _partials.HeaderComponent,
    _partials.layouts,
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
