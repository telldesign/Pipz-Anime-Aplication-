import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnimeListComponent } from './anime-list.component';
import { AnimesComponent } from './animes/animes.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../../material.module';

@NgModule({
    declarations: [
        AnimesComponent,
        SearchComponent,
        AnimeListComponent
    ],
    imports: [
        MaterialModule,
        BrowserAnimationsModule
    ]
})
export class PhotoListModule {}