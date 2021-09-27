

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomInputTypeComponent } from './component/custom-input-type.component';

@NgModule({
  declarations: [
    CustomInputTypeComponent,
  ],
  exports: [
    CustomInputTypeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
  ]
})
export class AppCommonModule { }
