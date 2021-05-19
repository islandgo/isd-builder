

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SectionRoutes } from './config/section.routes';
import { SectionComponent } from './component/section.component';
import { SectionRegionComponent } from './component/section-region.component';
import { SectionWidgetComponent } from './component/section-widget.component';


@NgModule({
  declarations: [
    SectionComponent,
    SectionRegionComponent,
    SectionWidgetComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SectionRoutes
  ],
  providers: [
  ]
})
export class AppSectionModule { }
