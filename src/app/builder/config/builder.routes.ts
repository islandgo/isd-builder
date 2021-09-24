import { CodeGeneratorComponent } from './../component/code-generator.component';
import { RegionsComponent } from './../component/regions.component';
import { WidgetsComponent } from './../component/widgets.component';
import {RouterModule} from "@angular/router";
import { BuilderComponent } from './../component/builder.component';
import { WidgetConverterComponent } from '../component/widget-converter.component';
import { PageSetUpComponent } from '../component/page-setup.component';

export const BuilderRoutes = RouterModule.forChild([
    {
        path: '',
        component: BuilderComponent,
        data: {
            title: 'Islandgo Software Development'
        },
        children: [
            {
                path: 'regions',
                component: RegionsComponent,
                pathMatch: 'full',
                data: {
                }
            },
            {
                path: 'widgets-list',
                component: WidgetsComponent,
                pathMatch: 'full',
                data: {
                }
            },
            {
                path: 'code-generator',
                component: CodeGeneratorComponent,
                pathMatch: 'full',
                data: {
                }
            },
            {
                path: 'widget-converter',
                component: WidgetConverterComponent,
                pathMatch: 'full',
                data: {
                }
            },
            {
                path: 'page-setup',
                component: PageSetUpComponent,
                pathMatch: 'full',
                data: {
                }
            }
        ]
    }
]);
