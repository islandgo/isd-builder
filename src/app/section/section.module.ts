

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SectionRoutes } from './config/section.routes';
import { SectionComponent } from './component/section.component';
import { SectionRegionComponent } from './component/section-region.component';
import { SectionWidgetComponent } from './component/section-widget.component';
import { AppCommonModule } from '../common/common.module';
import { CustomInputTypeComponent } from '../common/component/custom-input-type.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    SectionComponent,
    SectionRegionComponent,
    SectionWidgetComponent
  ],
  imports: [
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    SectionRoutes
  ],
  providers: [
  ]
})
export class AppSectionModule { }
