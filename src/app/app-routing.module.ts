import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
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
    children: [
      {
        path: ':leng',
        component: GridFoGamesConteinerComponent,
        data: {
          leng: true
        }
      },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
