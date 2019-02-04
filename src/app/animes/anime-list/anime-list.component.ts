import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent{

  list;
  show: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) { }

  filtrar(value) {
    this.animeService.listFromName(value).subscribe(i => {
      this.list = i;
      this.list = this.list.data;
      this.list.forEach(element => {
        element.id = '/details/' + element.id;
      });
      this.exibicaoList(value);
    });
  }

  exibicaoList(valorInput){
    this.show = valorInput.length > 0;
  }
}
