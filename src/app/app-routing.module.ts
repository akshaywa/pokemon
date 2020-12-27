import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cardsgame',
    pathMatch: 'full'
  },
  {
    path: 'pokemoncard',
    loadChildren: () => import('./pokemoncard/pokemoncard.module').then( m => m.PokemoncardPageModule)
  },
  {
    path: 'cardsgame',
    loadChildren: () => import('./cardsgame/cardsgame.module').then( m => m.CardsgamePageModule)
  },
  {
    path: 'pokemonstats',
    loadChildren: () => import('./pokemonstats/pokemonstats.module').then( m => m.PokemonstatsPageModule)
  },
  {
    path: 'trainerstats',
    loadChildren: () => import('./trainerstats/trainerstats.module').then( m => m.TrainerstatsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
