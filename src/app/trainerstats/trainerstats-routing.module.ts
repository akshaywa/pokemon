import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerstatsPage } from './trainerstats.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerstatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerstatsPageRoutingModule {}
