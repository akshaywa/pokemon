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

  changeTypeColor(type: string): string {
    if (type.includes("Grass")) {
      return "#006600"
    } else if (type.includes("Water")) {
      return "#215B90"
    } else if (type.includes("Fairy")) {
      return "#FF3399"
    } else if (type.includes("Fire")) {
      return "#FF3333"
    } if (type.includes("Electric")) {
      return "#DEDE15"
    } else if (type.includes("Dragon")) {
      return "orange"
    } else if (type.includes("Poison")) {
      return "purple"
    } else if (type.includes("Normal")) {
      return "grey"
    } else if (type.includes("Bug")) {
      return "#6C8D3E"
    } else if (type.includes("Ground") || type.includes("Rock")) {
      return "#b53f1d"
    } else if (type.includes("Fighting")) {
      return "#B0E9E0"
    } else if (type.includes("Psychic")) {
      return "#AB1477"
    }
  }

  randomCardColor(type: string): string {
    if (type.includes("Grass")) {
      return "#99FF99"
    } else if (type.includes("Water")) {
      return "#9999FF"
    } else if (type.includes("Fairy")) {
      return "#ffb6c1"
    } else if (type.includes("Fire")) {
      return "#FF6666"
    } if (type.includes("Electric")) {
      return "#FFFF99"
    } else if (type.includes("Dragon")) {
      return "#FFCC99"
    } else if (type.includes("Poison")) {
      return "#FF99FF"
    } else if (type.includes("Normal")) {
      return "#E0E0E0"
    } else if (type.includes("Bug")) {
      return "#CCFF99"
    } else if (type.includes("Ground") || type.includes("Rock")) {
      return "#e98373"
    } else if (type.includes("Fighting")) {
      return "#CCFFFF"
    } else if (type.includes("Psychic")) {
      return "#c45a9f"
    }
  }

}
