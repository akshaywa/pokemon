import { Injectable } from '@angular/core';
import { Pokemon } from './dto/pokemon';
declare var require: any 

@Injectable({
  providedIn: 'root'
})
export class PokemonlistService {
  private pokemonList: Pokemon[];
  private startCardGame: boolean;

  constructor() { }

  public getPokemonListFromApi(): Promise<Pokemon[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pokemonList.results);
      }, 2000)
    })
  }

  setPokemonList(pokemonList: Pokemon[]): void {
    this.pokemonList = pokemonList;
  }

  getPokemonList(): Pokemon[] {
    return this.pokemonList;
  }

  setStartCardGame(startCardGame: boolean): void {
    this.startCardGame = startCardGame;
  }

  getStartCardGame(): boolean {
    return this.startCardGame;
  }
}

export const pokemonList = require('../assets/pokemon.json');