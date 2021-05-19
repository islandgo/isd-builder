import {RouterModule} from "@angular/router";

export const AppRoutes = RouterModule.forRoot([
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'builder/regions',
                pathMatch: 'full'
            },
        
            {
                path: 'builder',
                loadChildren: './builder/builder.module#AppBuilderModule',
                data: {
                    title: '',
                }
            },
            {
                path: 'section',
                loadChildren: './section/section.module#AppSectionModule',
                data: {
                    title: '',
                }
            }
        ]
    },


],
    {scrollPositionRestoration: 'top'});
