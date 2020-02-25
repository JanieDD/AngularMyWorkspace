import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
//import { POKEMON } from './mock-pokemons';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PokemonService } from '../../pokemon.service';


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

  selectedPokemon: Pokemon;

  constructor(private http: HttpClient, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151/',
      {

      }).subscribe(data => {

        this.pokemons = data;

        // iterer dans l'objet pour obtenir l'url de chaque pokemon


        //console.log(element);



        console.log(this.pokemons);
        //console.log(this.pokemonsDetails);

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