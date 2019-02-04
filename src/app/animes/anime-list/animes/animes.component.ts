import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent {
  
  @Input() dataSource;

  displayedColumns: string[] = ['title', 'averageRating', 'startDate', 'endDate', 'status', 'posterImage'];
  
  constructor() { }
  
}