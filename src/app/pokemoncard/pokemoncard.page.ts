import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../dto/pokemon';
import { PokemonlistService } from '../pokemonlist.service';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.page.html',
  styleUrls: ['./pokemoncard.page.scss'],
})
export class PokemoncardPage implements OnInit {
  pokemonList: Pokemon[];

  constructor(private pokemonListService: PokemonlistService) {
    this.initializePokemonList();
  }

  ngOnInit() {
  }

  initializePokemonList(): void {
    this.pokemonListService.content.subscribe((data) => {
      this.pokemonList = data;
    });
  }

}
