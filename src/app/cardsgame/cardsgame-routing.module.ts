import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsgamePage } from './cardsgame.page';

const routes: Routes = [
  {
    path: '',
    component: CardsgamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsgamePageRoutingModule {}
