import {RouterModule} from "@angular/router";
import { BuilderComponent } from './../component/builder.component';

export const BuilderRoutes = RouterModule.forChild([
    {
        path: '',
        component: BuilderComponent,
        data: {
            title: 'Islandgo Software Development'
        }
    }
]);
