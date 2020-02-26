import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
//import { POKEMON } from './mock-pokemons';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PokemonService } from '../../pokemon.service';
import { Observable } from 'rxjs';
import { IPokemon } from '../../IPokemon';


@Component({
  selector: 'app-mypokemon',
  templateUrl: './mypokemon.component.html',
  styleUrls: ['./mypokemon.component.css']
})
export class MypokemonComponent implements OnInit {

  /*   pokemon: Pokemon = {
      id: 1,
      name: "Ditto"
    };
   */
  //pokemons = POKEMON;
  pokemons;
  pokemonsDetails;
  listOfPokemons;

  selectedPokemon: Pokemon;

  constructor(private http: HttpClient, private pokemonService: PokemonService) { 
    this.pokemonService.getPokemons()
    .subscribe(
      (value) => {
        this.listOfPokemons = value;
        console.log("POKEMON subscribe to getPokemons value = ");
        console.log(value);
      }
    );


  //this.fetchDetails();


}

  

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151/',
      {

      }).subscribe(data => {

        this.pokemons = data;

        console.log(this.pokemons);
        

      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log(err);
          }
        });
  }

  /*   onSelect(pok: Pokemon): void {
      this.selectedPokemon = pok;
    } */

  onSelect(event, pokemon): void {

    this.pokemonService.setSelectedPokemon(pokemon);

    console.log("Pokemon onSelect event: ");
    console.log(event);
    console.log("Pokemon onSelect selected pokemon object: ");
    console.log(pokemon);

    console.log("Pokemon onSelect selected  pokemon  name: " + this.selectedPokemon.name);

  }
}