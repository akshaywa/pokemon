import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonstatsPage } from './pokemonstats.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonstatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonstatsPageRoutingModule {}
