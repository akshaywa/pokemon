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
  pokemonList: Pokemon[];

  yourSkill: number;
  aiSkill: number;
  whoWon: string = null;

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
    while (this.cardInStack < 10) {
      this.cardStack.push(new CardStack("assets/images/cardback.jpg", this.newVal));
      this.cardInStack++;
      this.newVal = this.newVal + 2;
    }
  }

  async createCardStackYou() {
    await this.initializePokemonList();
    while (this.cardInYou < 10) {
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

  async compareCard(skill: string) {
    this.cardStackAi();
    this.skillCompare(skill);    

    await (await this.alertController.create({
      header: this.whoWon,
      message: `<table>
      <tr>
        <td>YOUR `+ skill.toUpperCase() + `</td>
        <td>OPPONENT `+ skill.toUpperCase() + `</td>
      </tr>
      <tr>
        <td>`+ this.yourSkill + `</td>
        <td>`+ this.aiSkill + `</td>
      </tr>
    </table>`,
      buttons: [
        {
          text: 'Bet Again',
          handler: () => {
            this.cardYou.splice((this.cardYou.length - 1), 1);
            this.cardPresentAI = false;
            this.whoWon = null;
          }
        }
      ],
      backdropDismiss: false
    })).present();
  }

  cardStackAi(): void {
    this.cardAI = this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)];
    this.cardStack.splice((this.cardStack.length - 1), 1);
    this.cardPresentAI = true;
  }

  skillCompare(skill: string): void {
    if (skill == 'power') {
      this.yourSkill = parseInt(this.cardYou[this.cardYou.length - 1].pokemon.power, 10);
      this.aiSkill = parseInt(this.cardAI.power, 10);
    } else if (skill == 'attack') {
      this.yourSkill = parseInt(this.cardYou[this.cardYou.length - 1].pokemon.attack, 10);
      this.aiSkill = parseInt(this.cardAI.attack, 10);
    } else if (skill == 'defence') {
      this.yourSkill = parseInt(this.cardYou[this.cardYou.length - 1].pokemon.defence, 10);
      this.aiSkill = parseInt(this.cardAI.defence, 10);
    } else if (skill == 'speed') {
      this.yourSkill = parseInt(this.cardYou[this.cardYou.length - 1].pokemon.speed, 10);
      this.aiSkill = parseInt(this.cardAI.speed, 10);
    }
    

    if (this.yourSkill > this.aiSkill) {
      this.whoWon = 'You Won';
    } else if (this.yourSkill < this.aiSkill) {
      this.whoWon = 'Opponent Won';
    } else {
      this.whoWon = 'Match Drawn';
    }
  }
}
