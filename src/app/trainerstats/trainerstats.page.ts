import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../dto/pokemon';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-trainerstats',
  templateUrl: './trainerstats.page.html',
  styleUrls: ['./trainerstats.page.scss'],
})
export class TrainerstatsPage implements OnInit {
  myPokemonList: string[] = [];

  constructor(private sqlite: SQLite) {
  }

  ngOnInit() {    
    this.initializePokemonList();
  }


  initializePokemonList(): void {
    this.sqlite.create({
      name: 'pokemondb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql(`SELECT * FROM pokemonTable`, [])
        .then((r) => {
          for (let i = 0; i < r.rows.length; i++) {
            this.myPokemonList = [...this.myPokemonList, r.rows.item(i).image];
          }
        })
        .catch(e => console.log("select error: " + e));
    })
      .catch(e => console.log(e));
  }

}
