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

  startCardGame: boolean = false;
  cardPresentAI: boolean;
  pokemonList: Pokemon[];

  yourSkill: number;
  aiSkill: number;
  yourScore: number = 0;
  aiScore: number = 0;
  whoWon: string = null;

  constructor(private pokemonListService: PokemonlistService,
    private alertController: AlertController) {
    this.createCardStack();
    this.createCardStackYou();
  }

  ngOnInit() {
  }

  async initializePokemonList() {
    await this.pokemonListService.getPokemonListFromApi().then((pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
      this.pokemonListService.content.next(this.pokemonList);
    }).catch(() => {
      console.log("json not fetched");
    });
  }

  createCardStack(): void {
    while (this.cardInStack < 12) {
      this.cardStack.push(new CardStack("assets/images/cardback.jpg", this.newVal));
      this.cardInStack++;
      this.newVal = this.newVal + 2;
    }
  }

  async createCardStackYou() {
      await this.initializePokemonList();
    while (this.cardInYou < 12) {
      let randomCard = this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)];
      this.cardYou.push(new CardYou(randomCard, this.newValYou));
      this.cardInYou++;
      this.newValYou = this.newValYou + 2;
    }
  }

  startGame(): void {
    this.startCardGame = true;
  }

  async compareCard(skill: string) {
    this.cardStackAi();
    this.skillCompare(skill);

    await (await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.whoWon,
      message: `<table>
      <tr>
        <td>YOUR&ensp;&ensp;</td>
        <td>OPPONENT</td>
      </tr>
      <tr>
        <td>`+ skill.toUpperCase() + `&ensp;&ensp;</td>
        <td>`+ skill.toUpperCase() + `</td>
      </tr>
      <tr>
        <td>`+ this.yourSkill + `&ensp;&ensp;</td>
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
            if (this.cardYou.length == 0) {
              this.askToPlayAgain();
            }
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
      this.yourScore++;
    } else if (this.yourSkill < this.aiSkill) {
      this.whoWon = 'Opponent Won';
      this.aiScore++;
    } else {
      this.whoWon = 'Match Drawn';
      this.yourScore++;
      this.aiScore++;
    }
  }

  async askToPlayAgain() {
    let whowon;
    if (this.yourScore > this.aiScore) {
      whowon = 'You Won the Round';
    } else if (this.yourScore < this.aiScore) {
      whowon = 'Opponent Won the Round';
    } else {
      whowon = 'Match Drawn for the Round';
    }

    const alert = await this.alertController.create({
      header: whowon,
      buttons: [
        {
          text: 'Start new game with new cards',
          handler: () => {
            this.cardInStack = 0;
            this.cardInYou = 0;
            this.newVal = 0;
            this.newValYou = 0;
            this.yourScore = 0;
            this.aiScore = 0;
            this.createCardStack();
            this.createCardStackYou();
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }
}
