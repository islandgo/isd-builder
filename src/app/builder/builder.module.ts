import { HtmlGeneratorComponent } from './component/html-generator.component';
import { CssGeneratorComponent } from './component/css-generator.component';
import { CodeGeneratorComponent } from './component/code-generator.component';
import { RegionsComponent } from './component/regions.component';
import { WidgetsComponent } from './component/widgets.component';
import { BuilderRoutes } from './config/builder.routes';
import { NgModule } from '@angular/core';
import { BuilderComponent } from './component/builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RegionSectionModel } from './model/payment.model';
import { ModalModule } from 'ngx-bootstrap/modal';
import { JsGeneratorComponent } from './component/js-generator.component';
import { CssMobileGeneratorComponent } from './component/css-mobile-generator.component';
import { WidgetConverterComponent } from './component/widget-converter.component';
import { PageSetUpComponent } from './component/page-setup.component';
import { HeaderGeneratorComponent } from './component/header-generator.component';
import { AppCommonModule } from '../common/common.module';
import { SectionBackgroundComponent } from './component/widget-css-component/section-background/section-background.component';
import { GridSectionComponent } from './component/widget-css-component/grid-section/grid-section.component';
import { GalleryImageComponent } from './component/widget-html-component/gallery-image/gallery-image.component';

@NgModule({
  declarations: [
    BuilderComponent,
    WidgetsComponent,
    RegionsComponent,
    CodeGeneratorComponent,
    CssGeneratorComponent,
    WidgetConverterComponent,
    PageSetUpComponent,
    HtmlGeneratorComponent,
    JsGeneratorComponent,
    CssMobileGeneratorComponent,
    HeaderGeneratorComponent,
    SectionBackgroundComponent,
    GridSectionComponent,
    GalleryImageComponent
  ],
  imports: [
    BuilderRoutes,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    DragDropModule,
    AppCommonModule,
    CommonModule
  ],
  providers: [
    RegionSectionModel
  ]
})
export class AppBuilderModule { }
