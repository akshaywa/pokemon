import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CardStack } from '../dto/cardstack';
import { CardYou } from '../dto/cardyou';
import { Pokemon } from '../dto/pokemon';
import { PokemonlistService } from '../pokemonlist.service';

@Component({
  selector: 'app-cardsgame',
  templateUrl: './cardsgame.page.html',
  styleUrls: ['./cardsgame.page.scss'],
})
export class CardsgamePage implements OnInit {
  cardStack: CardStack[] = [];
  cardYou: CardYou[] = [];
  cardAI: Pokemon;

  cardInStack: number = 0;
  cardInYou: number = 0;

  newVal: number = 0;
  newValYou: number = 0;

  startCardGame: boolean;
  cardPresentAI: boolean;
  compareYouAI: boolean;
  pokemonList: Pokemon[];

  constructor(private pokemonListService: PokemonlistService,
    private alertController: AlertController) {
    this.createCardStack();
    this.startCardGame = this.pokemonListService.getStartCardGame();
    this.createCardStackYou();
  }

  ngOnInit() {
  }

  async initializePokemonList() {
    await this.pokemonListService.getPokemonListFromApi().then((pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
      this.pokemonListService.setPokemonList(this.pokemonList);
    }).catch(() => {
      console.log("json not fetched");
    });
  }

  createCardStack(): void {
    while (this.cardInStack < 9) {
      this.cardStack.push(new CardStack("assets/images/cardback.jpg", this.newVal));
      this.cardInStack++;
      this.newVal = this.newVal + 2;
    }
  }

  async createCardStackYou() {
    await this.initializePokemonList();
    while (this.cardInYou < 9) {
      let randomCard = this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)];
      this.cardYou.push(new CardYou(randomCard, this.newValYou));
      this.cardInYou++;
      this.newValYou = this.newValYou + 2;
    }
  }

  startGame(): void {
    this.startCardGame = true;
    this.pokemonListService.setStartCardGame(true);
  }

  async compareCard() {
    this.cardStackAi();
    setTimeout(() => {
      this.compareYouAI = true;
    }, 600)

    await (await this.alertController.create({
      header: 'You Won',
      message: 'Pikachu has Better Attack than Raichu',
      buttons: [
        {
          text: 'Bet Again',
          handler: () => {
            this.cardYou.splice((this.cardYou.length - 1), 1);
            this.cardPresentAI = false;
          }
        }
      ]
    })).present();
  }

  cardStackAi(): void {
    this.cardAI = this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)];
    this.cardStack.splice((this.cardStack.length - 1), 1);
    this.cardPresentAI = true;
  }
}
