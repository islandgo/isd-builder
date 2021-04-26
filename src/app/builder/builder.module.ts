import { CodeGeneratorComponent } from './component/code-generator.component';
import { RegionsComponent } from './component/regions.component';
import { WidgetsComponent } from './component/widgets.component';
import { BuilderRoutes } from './config/builder.routes';
import { NgModule } from '@angular/core';
import { BuilderComponent } from './component/builder.component';

@NgModule({
  declarations: [
    BuilderComponent,
    WidgetsComponent,
    RegionsComponent,
    CodeGeneratorComponent
  ],
  imports: [
    BuilderRoutes
  ],
  providers: []
})
export class AppBuilderModule { }
