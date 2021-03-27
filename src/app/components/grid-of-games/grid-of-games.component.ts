import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-of-games',
  templateUrl: './grid-of-games.component.html',
  styleUrls: ['./grid-of-games.component.scss']
})
export class GridOfGamesComponent implements OnInit {

  @Input() gamesList: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
