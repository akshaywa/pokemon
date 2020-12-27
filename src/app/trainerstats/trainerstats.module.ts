import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainerstatsPageRoutingModule } from './trainerstats-routing.module';

import { TrainerstatsPage } from './trainerstats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainerstatsPageRoutingModule
  ],
  declarations: [TrainerstatsPage]
})
export class TrainerstatsPageModule {}
