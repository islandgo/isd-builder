import { SectionComponent } from '../component/section.component';

import {RouterModule} from "@angular/router";
import { SectionRegionComponent } from '../component/section-region.component';
import { SectionWidgetComponent } from '../component/section-widget.component';


export const SectionRoutes = RouterModule.forChild([
    {
        path: '',
        component: SectionComponent,
        data: {
            title: 'Islandgo Software Development'
        },
        children: [
            {
                path: 'region',
                component: SectionRegionComponent,
                pathMatch: 'full',
                data: {
                }
            },
            {
                path: 'widget',
                component: SectionWidgetComponent,
                data: {
                }
            }
        ]
    }
]);
