import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonstatsPageRoutingModule } from './pokemonstats-routing.module';

import { PokemonstatsPage } from './pokemonstats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonstatsPageRoutingModule
  ],
  declarations: [PokemonstatsPage]
})
export class PokemonstatsPageModule {}
