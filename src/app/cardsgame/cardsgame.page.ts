import { Component, OnInit } from '@angular/core';
import { CardStack } from '../dto/cardstack';
import { Pokemon } from '../dto/pokemon';
import { PokemonlistService } from '../pokemonlist.service';

@Component({
  selector: 'app-cardsgame',
  templateUrl: './cardsgame.page.html',
  styleUrls: ['./cardsgame.page.scss'],
})
export class CardsgamePage implements OnInit {
  cardStack: CardStack[] = [];
  cardInStack: number = 0;
  newVal: number = 0;
  startCardGame: boolean;
  pokemonList: Pokemon[];
  
  constructor(private pokemonListService: PokemonlistService) {      
    this.createCardStack();  
    this.initializePokemonList();
  }

  ngOnInit() {
    this.startCardGame = this.pokemonListService.getStartCardGame();
    this.createCardStackYou();
  }

  initializePokemonList(): void {
    this.pokemonListService.getPokemonListFromApi().then((pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
      this.pokemonListService.setPokemonList(this.pokemonList);
    }).catch(() => {
      console.log("json not fetched");
    });
  }

  createCardStack(): void {
    while(this.cardInStack < 9) {
      this.cardStack.push(new CardStack("assets/images/cardback.jpg", this.newVal));
      this.cardInStack++;
      this.newVal = this.newVal + 2;
    }
  }

  createCardStackYou(): void {
  }

  startGame(): void {
    this.startCardGame = true;
    this.pokemonListService.setStartCardGame(true);
  }
}
