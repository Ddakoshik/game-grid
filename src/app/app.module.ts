import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleCategoryComponent } from './components/toggle-category/toggle-category.component';
import { GridOfGamesComponent } from './components/grid-of-games/grid-of-games.component';
import { GameTileComponent } from './components/game-tile/game-tile.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridFoGamesConteinerComponent } from './conteiners/grid-fo-games-conteiner/grid-fo-games-conteiner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ToggleCategoryComponent,
    GridOfGamesComponent,
    GameTileComponent,
    FooterComponent,
    GridFoGamesConteinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
