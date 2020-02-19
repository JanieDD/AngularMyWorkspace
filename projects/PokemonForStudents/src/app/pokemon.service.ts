import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPokemon } from './IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonBehaviorSubject: BehaviorSubject<IPokemon>;
  private selectedPokemon: IPokemon;


  defaultPokemon;


  constructor() {
    this.defaultPokemon = {

      name: "Mew",
      url: "https://pokeapi.co/api/v2/pokemon/151/"
    };
    this.selectedPokemon = this.defaultPokemon;
    this.pokemonBehaviorSubject = new BehaviorSubject(this.selectedPokemon);

    console.log("POKEMON.SERVICE constructor: defaultPokemon = ");
    console.log(this.defaultPokemon);

  }


  getSelectedPokemon(): Observable<IPokemon> {
    return this.pokemonBehaviorSubject.asObservable();
  }

  setSelectedPokemon(selectedPokemon: IPokemon) {
    this.selectedPokemon = selectedPokemon;
    this.pokemonBehaviorSubject.next(selectedPokemon);
    console.log("Pokemon Service");
    console.log(selectedPokemon);
  }
}
