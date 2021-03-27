import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-grid-fo-games-conteiner',
  templateUrl: './grid-fo-games-conteiner.component.html',
  styleUrls: ['./grid-fo-games-conteiner.component.scss']
})
export class GridFoGamesConteinerComponent implements OnInit {


  gamesList = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGamesList().subscribe((data: any[]) => { // TODO add type
      console.log(data);
      this.gamesList = data;
  });
  }

}
