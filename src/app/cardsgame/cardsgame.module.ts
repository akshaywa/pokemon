import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsgamePageRoutingModule } from './cardsgame-routing.module';

import { CardsgamePage } from './cardsgame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsgamePageRoutingModule
  ],
  declarations: [CardsgamePage]
})
export class CardsgamePageModule {}
