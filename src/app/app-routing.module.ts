import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridFoGamesConteinerComponent } from './conteiners/grid-fo-games-conteiner/grid-fo-games-conteiner.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/grid-of-games',
    pathMatch: 'full'
  },
  {
    path: 'grid-of-games',
    component: GridFoGamesConteinerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
