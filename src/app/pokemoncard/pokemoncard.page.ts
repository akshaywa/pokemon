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

  constructor(private pokemonListService: PokemonlistService) { }

  ngOnInit() {
    this.initializePokemonList();
  }
 
  initializePokemonList(): void {
    this.pokemonListService.getPokemonList().then((pokemonList: Pokemon[]) => {   
      this.pokemonList = pokemonList;
    }).catch(() => {
      console.log("json not fetched");
    });
  }

}
