import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../conteiners/grid-fo-games-conteiner/grid-fo-games-conteiner.component';

@Component({
  selector: 'app-grid-of-games',
  templateUrl: './grid-of-games.component.html',
  styleUrls: ['./grid-of-games.component.scss']
})
export class GridOfGamesComponent implements OnInit {

  @Input() gamesList: Game[];

  constructor() { }

  ngOnInit(): void {
  }

}
