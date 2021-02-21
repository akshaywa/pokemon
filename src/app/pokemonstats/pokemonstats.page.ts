import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { Pokemon } from '../dto/pokemon';
import { PokemonlistService } from '../pokemonlist.service';

@Component({
  selector: 'app-pokemonstats',
  templateUrl: './pokemonstats.page.html',
  styleUrls: ['./pokemonstats.page.scss'],
})
export class PokemonstatsPage implements OnInit {
  pokemonList: Pokemon[];
  nameList: string[] = [];
  powerList: number[] = [];
  attackList: number[] = [];
  defenceList: number[] = [];
  speedList: number[] = [];

  constructor(private pokemonListService: PokemonlistService) {
  }

  ngOnInit() {
    this.initializeLineChartData().then(() => {
      this.createPowerChart();
      this.createAttackChart();
      this.createDefenceChart();
      this.createSpeedChart();
    });
  }

  async initializePokemonList() {
    this.pokemonList = this.pokemonListService.getPokemonList();
  }

  async initializeLineChartData() {
    await this.initializePokemonList().then(() => {
      for (let pokemon of this.pokemonList) {
        this.nameList.push(pokemon.name);
        this.powerList.push(parseInt(pokemon.power));        
        this.attackList.push(parseInt(pokemon.attack));        
        this.defenceList.push(parseInt(pokemon.defence));        
        this.speedList.push(parseInt(pokemon.speed));
      }
    });
  }

  createPowerChart() {
      var ctx = document.getElementById('powerChart') as HTMLCanvasElement;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.nameList,
          datasets: [{
            label: 'Power',
            data: this.powerList,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(255, 0, 0, 1)'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  }

  createAttackChart() {
    var ctx = document.getElementById('attackChart') as HTMLCanvasElement;
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.nameList,
        datasets: [{
          label: 'Attack',
          data: this.attackList,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 128, 0, 1)',
          borderWidth: 1,
          pointBackgroundColor: 'rgba(0, 128, 0, 1)'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
}

createDefenceChart() {
  var ctx = document.getElementById('defenceChart') as HTMLCanvasElement;
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: this.nameList,
      datasets: [{
        label: 'Defence',
        data: this.defenceList,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(0, 0, 255, 1)'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

createSpeedChart() {
  var ctx = document.getElementById('speedChart') as HTMLCanvasElement;
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: this.nameList,
      datasets: [{
        label: 'Speed',
        data: this.speedList,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(255, 165, 0, 1)'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

}
