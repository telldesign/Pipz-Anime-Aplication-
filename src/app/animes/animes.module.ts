import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DetailsComponent } from './details/details.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimesComponent } from './anime-list/animes/animes.component';
import { SearchComponent } from './anime-list/search/search.component';
import { MaterialModule } from '../../app/material.module';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AnimeListComponent,
        AnimesComponent,
        DetailsComponent,   
        SearchComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        MaterialModule,
        HttpClientModule
    ]
})
export class AnimesModule {}