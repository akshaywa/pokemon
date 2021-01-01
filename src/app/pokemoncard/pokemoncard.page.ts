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
    this.pokemonList = this.pokemonListService.getPokemonList();
  }

  changeTypeColor(type: string): string {
    if (type.includes("Grass")) {
      return "#99CC32"
    } else if (type.includes("Water")) {
      return "#33A1C9"
    } else if (type.includes("Fairy")) {
      return "#FF3399"
    } else if (type.includes("Fire")) {
      return "#FF030D"
    } if (type.includes("Electric")) {
      return "#FFE303"
    } else if (type.includes("Dragon")) {
      return "orange"
    } else if (type.includes("Poison")) {
      return "#917db8"
    } else if (type.includes("Normal")) {
      return "grey"
    } else if (type.includes("Bug")) {
      return "#CAFF70"
    } else if (type.includes("Ground") || type.includes("Rock")) {
      return "#A67D3D"
    } else if (type.includes("Fighting")) {
      return "#7EEFD0"
    } else if (type.includes("Psychic")) {
      return "#AB1477"
    }
  }

  randomCardColor(type: string): string {
    if (type.includes("Grass")) {
      return "#D6EBAD"
    } else if (type.includes("Water")) {
      return "#ADDAEA"
    } else if (type.includes("Fairy")) {
      return "#ffb6c1"
    } else if (type.includes("Fire")) {
      return "#FF4F56"
    } if (type.includes("Electric")) {
      return "#FFF49A"
    } else if (type.includes("Dragon")) {
      return "#FFAF4D"
    } else if (type.includes("Poison")) {
      return "#d2bcfb"
    } else if (type.includes("Normal")) {
      return "#E7E3E0"
    } else if (type.includes("Bug")) {
      return "#E7FFBE"
    } else if (type.includes("Ground") || type.includes("Rock")) {
      return "#CAA66F"
    } else if (type.includes("Fighting")) {
      return "#E8FCF7"
    } else if (type.includes("Psychic")) {
      return "#F7C3D4"
    }
  }

}
