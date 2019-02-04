import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './animes/details/details.component';
import { AnimesComponent } from './animes/anime-list/animes/animes.component';
import { AnimeListComponent } from './animes/anime-list/anime-list.component';

const routes: Routes = [
    {
        path: '',
        component: AnimeListComponent
    },
    {
        path: 'details/:name',
        component: DetailsComponent
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

