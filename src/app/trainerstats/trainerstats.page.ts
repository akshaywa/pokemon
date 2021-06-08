import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../dto/pokemon';
import { PokemonlistService } from '../pokemonlist.service';

@Component({
  selector: 'app-trainerstats',
  templateUrl: './trainerstats.page.html',
  styleUrls: ['./trainerstats.page.scss'],
})
export class TrainerstatsPage implements OnInit {  
  myPokemonList: Pokemon[];

  constructor(private pokemonListService: PokemonlistService) {
    this.initializePokemonList();
  }

  ngOnInit() {
  }

  initializePokemonList(): void {
    this.pokemonListService.content.subscribe((data) => {
      this.myPokemonList = data;
    });
  }

}
