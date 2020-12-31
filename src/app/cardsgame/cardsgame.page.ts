import { Component, OnInit } from '@angular/core';
import { CardStack } from '../dto/cardstack';

@Component({
  selector: 'app-cardsgame',
  templateUrl: './cardsgame.page.html',
  styleUrls: ['./cardsgame.page.scss'],
})
export class CardsgamePage implements OnInit {
  cardStack: CardStack[] = [];
  cardInStack: number = 0;
  newVal: number = 0;
  
  constructor() {
  }

  ngOnInit() {
    this.createCardStack();
  }

  createCardStack() {
    while(this.cardInStack < 8){
      this.cardStack.push(new CardStack("assets/images/cardback.jpg", this.newVal));
      this.cardInStack++;
      this.newVal = this.newVal + 2;
    }
  }
}
