import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: string = '';

  constructor(private animeService: AnimeService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params.name){
      this.animeService.detailsFromId(this.route.snapshot.params.name).then(resp => this.details = resp.data[0].attributes);
    }
  }
}
