import { BuilderRoutes } from './config/builder.routes';
import { NgModule } from '@angular/core';
import { BuilderComponent } from './component/builder.component';

@NgModule({
  declarations: [
    BuilderComponent,
  ],
  imports: [
    BuilderRoutes
  ],
  providers: []
})
export class AppBuilderModule { }
