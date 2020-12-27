import { getCurrencySymbol } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
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
    if(type.includes("Grass")) {
      return "green"
    } else if(type.includes("Water")) {
      return "#215B90"
    } else if(type.includes("Fairy")) {
      return "pink"
    } else if(type.includes("Fire")) {
      return "#ff0000"
    } if(type.includes("Electric")) {
      return "#DEDE15"
    } else if(type.includes("Dragon")) {
      return "orange"
    } else if(type.includes("Poison")) {
      return "purple"
    } else if(type.includes("Normal")) {
      return "grey"
    } else if(type.includes("Bug")) {
      return "#6C8D3E"
    }  else if(type.includes("Ground")  || type.includes("Rock")) {
      return "#DC9E32"
    } else if(type.includes("Fighting")) {
      return "#B0E9E0"
    } else if(type.includes("Psychic")) {
      return "#AB1477"
    }  
  }

}
