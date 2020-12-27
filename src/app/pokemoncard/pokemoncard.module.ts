import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemoncardPageRoutingModule } from './pokemoncard-routing.module';

import { PokemoncardPage } from './pokemoncard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemoncardPageRoutingModule
  ],
  declarations: [PokemoncardPage]
})
export class PokemoncardPageModule {}
