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
    CssMobileGeneratorComponent
  ],
  imports: [
    BuilderRoutes,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    DragDropModule,
    CommonModule
  ],
  providers: [
    RegionSectionModel
  ]
})
export class AppBuilderModule { }
