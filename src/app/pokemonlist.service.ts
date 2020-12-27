import { Injectable } from '@angular/core';
import { Pokemon } from './dto/pokemon';
declare var require: any 

@Injectable({
  providedIn: 'root'
})
export class PokemonlistService {

  constructor() { }

  public getPokemonList(): Promise<Pokemon[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pokemonList.results);
      }, 2000)
    })
  }
}

export const pokemonList = require('../assets/pokemon.json');