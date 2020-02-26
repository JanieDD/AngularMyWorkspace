import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPokemon } from './IPokemon';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonBehaviorSubject: BehaviorSubject<IPokemon>;
  private selectedPokemon: IPokemon;


  defaultPokemon;
  private listOfPokemons: Observable<IPokemon[]>;


  constructor(private http: HttpClient) {
    this.defaultPokemon = {

      name: "Mew",
      url: "https://pokeapi.co/api/v2/pokemon/151/"
    };
    this.selectedPokemon = this.defaultPokemon;
    this.pokemonBehaviorSubject = new BehaviorSubject(this.selectedPokemon);

    console.log("POKEMON.SERVICE constructor: defaultPokemon = ");
    console.log(this.defaultPokemon);

  }

  getPokemons(): Observable<IPokemon[]> {     //À rajouter

    this.listOfPokemons = this.fetchList();
    console.log("SERVICE GETPOKEMONS this.listOfPokemons");
    console.log(this.listOfPokemons);
    //return this.listOfPokemons;
    return this.listOfPokemons;
  }

  getPokemon(pokName: string): Observable<IPokemon> {

    return this.fetchDetails(pokName);
 
  }
 
 
 
 fetchList(): Observable<IPokemon[]> {   //À rajouter
 
    // pas de subscribe, pour pouvoir retourner l'observable
    return this.http.get<IPokemon[]>('https://pokeapi.co/api/v2/pokemon/');
  }

  fetchDetails(pokName): Observable<IPokemon> {
    let selectedPokemon = this.http.get<IPokemon>("https://pokeapi.co/api/v2/pokemon/" + pokName.toString());
   console.log("POK-SERVICE fetchDetails selectedPokemon = ");
   console.log(selectedPokemon);
   return selectedPokemon;
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
