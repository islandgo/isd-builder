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
import { GalleryImageCssComponent } from './component/widget-css-component/gallery-image-css/gallery-image-css.component';
import { WidgetListComponent } from './component/widget-list.component';
import { SimpleSlickComponent } from './component/widget-html-component/simple-slick/simple-slick.component';
import { SimpleSlickJsComponent } from './component/widget-js-component/simple-slick-js/simple-slick-js.component';
import { SimpleSlickCssComponent } from './component/widget-css-component/simple-slick-css/simple-slick-css.component';
import { WidgetListJsComponent } from './component/widget-list-js.component';
import { WidgetListCssComponent } from './component/widget-list-css.component';
import { ElementPeekCssComponent } from './component/widget-css-component/element-peek-css/element-peek-css.component';
import { ElementPeekJsComponent } from './component/widget-js-component/element-peek-js/element-peek-js.component';
import { ElementPeekHtmlComponent } from './component/widget-html-component/element-peek-html/element-peek-html.component';
import { ContactFormComponent } from './component/widget-html-component/contact-form/contact-form.component';
import { ContactFormCssComponent } from './component/widget-css-component/contact-form-css/contact-form-css.component';
import { SiteTitleComponent } from './component/widget-html-component/site-title/site-title.component';
import { QuickSearchComponent } from './component/widget-html-component/quick-search/quick-search.component';
import { QuickSearchCssComponent } from './component/widget-css-component/quick-search-css/quick-search-css.component';
import { WidgetListMobileCssComponent } from './component/widget-list-mobile-css.component';
import { QuickSearchMobileCssComponent } from './component/widget-css-mobile-component/quick-search-css/quick-search-mobile-css.component';

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
    GalleryImageComponent,
    GalleryImageCssComponent,
    SimpleSlickComponent,
    WidgetListComponent,
    SimpleSlickJsComponent,
    SimpleSlickCssComponent,
    WidgetListJsComponent,
    WidgetListCssComponent,
    WidgetListMobileCssComponent,
    ElementPeekCssComponent,
    ElementPeekJsComponent,
    ElementPeekHtmlComponent,
    ContactFormComponent,
    ContactFormCssComponent,
    SiteTitleComponent,
    QuickSearchComponent,
    QuickSearchCssComponent,
    QuickSearchMobileCssComponent
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
