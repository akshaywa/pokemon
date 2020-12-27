import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemoncardPage } from './pokemoncard.page';

const routes: Routes = [
  {
    path: '',
    component: PokemoncardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemoncardPageRoutingModule {}
