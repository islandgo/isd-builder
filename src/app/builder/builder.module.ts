import { CodeGeneratorComponent } from './component/code-generator.component';
import { RegionsComponent } from './component/regions.component';
import { WidgetsComponent } from './component/widgets.component';
import { BuilderRoutes } from './config/builder.routes';
import { NgModule } from '@angular/core';
import { BuilderComponent } from './component/builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    BuilderComponent,
    WidgetsComponent,
    RegionsComponent,
    CodeGeneratorComponent
  ],
  imports: [
    BuilderRoutes,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    CommonModule
  ],
  providers: []
})
export class AppBuilderModule { }
