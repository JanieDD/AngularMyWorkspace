import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMON } from './mock-pokemon';
import { IPokemon } from '../IPokemon';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; //ajouter pour weather

@Component({
  selector: 'app-mypokemon',
  templateUrl: './mypokemon.component.html',
  styleUrls: ['./mypokemon.component.css']
})

export class MypokemonComponent implements OnInit {

  /*   pokemonTableau = POKEMON;
    pokemonTest: Pokemon; */
  pokemons: IPokemon[];
  selectedPokemon: Pokemon;
  listOfPokemons;  // variable a rajouter pour la liste de ville

  defaultCity;

  constructor() {

    this.selectedPokemon = {
      id: 6145489,
      name: "Shawinigan"
      }
  }

  ngOnInit() {
        //this.listOfPokemons = pokemonList;
        console.log("Liste des villes: ");
        console.log(this.listOfPokemons);
      }
    
      onSelect(event, pokemon): void {
    
        console.log("CITY onSelect event: ");
        console.log(event);
        console.log("CITY onSelect selected city object: ");
        console.log(pokemon);
    
        console.log("CITY onSelect selected city name: " + this.selectedPokemon.name);
    
      }
    



/* 
  constructor(private http: HttpClient) {  //ajouter dans le constructeur

    /*     this.pokemonTest = {
          id: 123,
        name: "Balbusar"
        };
        this.pokemonTest.name = "Balbusar";
        console.log(this.pokemonTest); */
/*   } */ 

/*   ngOnInit() {
    // this.http.get('https://api.openweathermap.org/data/2.5/forecast', {}
    this.http.get('https://pokeapi.co/api/v2/pokemon/', {})
      .subscribe(data) => {
      this.pokemons = data.results;
      console.log(this.pokemons);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log(err);
      }
    };
  } */
/*   ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/',
      {
      }).subscribe(data => {
        this.pokemons = data.results;
        console.log(this.pokemons);
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log(err);
          }
        });
  } */

/*   onSelect(pok: Pokemon): void {
    this.selectedPokemon = pok;
  } */

}

