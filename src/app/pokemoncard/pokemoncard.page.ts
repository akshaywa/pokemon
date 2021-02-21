import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Pokemon } from '../dto/pokemon';
import { PokemonlistService } from '../pokemonlist.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.page.html',
  styleUrls: ['./pokemoncard.page.scss'],
})
export class PokemoncardPage implements OnInit {
  pokemonList: Pokemon[];

  constructor(private pokemonListService: PokemonlistService,
    private alertController: AlertController) {
    this.initializePokemonList();
  }

  ngOnInit() {
  }

  initializePokemonList(): void {
    this.pokemonList = this.pokemonListService.getPokemonList();
  }

  async getStats(pokemon: Pokemon) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Pokemon Stats',
      message: `
      <div>
      <canvas id="statsChart" width="108%" height="100%"></canvas>
      </div>
      `,
      backdropDismiss: true
    });
    await alert.present();
    this.createStatsChart(pokemon);
  }

  createStatsChart(pokemon: Pokemon) {
    var ctx = document.getElementById('statsChart') as HTMLCanvasElement;
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['power', 'attack', 'speed', 'defence'],
        datasets: [{
          label: 'Pokemon Stats',
          data: [pokemon.power, pokemon.attack, pokemon.speed, pokemon.defence],
          backgroundColor: ['rgba(255, 0, 0, 1)',
            'rgba(0, 128, 0, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(255, 165, 0, 1)'],
          hoverOffset: 4
        }]
      }
    });
  }

}
