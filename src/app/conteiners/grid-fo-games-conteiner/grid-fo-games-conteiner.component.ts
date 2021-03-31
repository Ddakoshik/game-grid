import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

export class GamesLocalModel {
  en: Game[];
  ru: Game[];
}
export interface Game {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  imageUrl: string;

}


@Component({
  selector: 'app-grid-fo-games-conteiner',
  templateUrl: './grid-fo-games-conteiner.component.html',
  styleUrls: ['./grid-fo-games-conteiner.component.scss']
})
export class GridFoGamesConteinerComponent implements OnInit, OnDestroy {


  gamesListApiData: GamesLocalModel[] = [];
  gamesList: Game[] = [];
  searchTerm: string = '';
  selectedCategoryId: number = null;
  currentLang: string;

  translation$ = this.translate.onLangChange.pipe(
    tap(({ lang }) => {
      this.currentLang = lang;
      this.updateGamesList();
    }
  )).subscribe();

  categoriesList = [
    {
      id: 1,
      name: 'Cat 1'
    },
    {
      id: 2,
      name: 'Cat 2'
    },
    {
      id: 3,
      name: 'Cat 3'
    },
    {
      id: 4,
      name: 'Cat 4'
    },
    {
      id: 5,
      name: 'Cat 5'
    }
  ];

  constructor(private apiService: ApiService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.currentLang = this.translate.store.currentLang;
    this.apiService.getGamesList().subscribe((data: GamesLocalModel[]) => {
      this.gamesListApiData = data;
      this.gamesList = data[this.currentLang];
    });
  }

  ngOnDestroy(): void {
    this.translation$.unsubscribe();
  }


  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.updateGamesList();
  }

  onSelectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.updateGamesList();

  }

  updateGamesList(): void {
    if (!this.gamesListApiData) {
      return;
    }
    if (!this.searchTerm.trim().length) {
      this.gamesList = this.gamesListApiData[this.currentLang];
    } else{
      this.gamesList = this.gamesListApiData[this.currentLang].filter(val => val.name.includes(this.searchTerm));
    }

    if (this.selectedCategoryId !== null) {
      this.gamesList = this.gamesList.filter(val => val.categoryId === this.selectedCategoryId);
    }
  }
}
