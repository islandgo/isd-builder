import {RouterModule} from "@angular/router";

export const AppRoutes = RouterModule.forRoot([
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'builder',
                pathMatch: 'full'
            },
        
            {
                path: 'builder',
                loadChildren: './builder/builder.module#AppBuilderModule',
                data: {
                    title: '',
                }
            }
        ]
    },


],
    {scrollPositionRestoration: 'top'});
