import { CodeGeneratorComponent } from './../component/code-generator.component';
import { RegionsComponent } from './../component/regions.component';
import { WidgetsComponent } from './../component/widgets.component';
import {RouterModule} from "@angular/router";
import { BuilderComponent } from './../component/builder.component';

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
            }
        ]
    }
]);
