import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {IPokemon} from '../IPokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {

  @Input() selectedPokemon: IPokemon;

  constructor(private http: HttpClient) {
    console.log("WEATHER constructor");

    console.log("this.selectedPokemon = ");
    console.log(this.selectedPokemon);

    console.log("WEATHER constructor");

    console.log("this.selectedPokemon= ");
    console.log(this.selectedPokemon);

  }

  ngOnInit() {
    console.log("WEATHER ngOnInit AVANT fetchDetails");
    console.log("WEATHER this.selectedPokemon = ");
    console.log(this.selectedPokemon);

    this.fetchDetails();

  }

  ngOnChanges(changes: SimpleChanges): void {  //rajouter cette fonction et enlever du OnInit
                            
    console.log("WEATHER ngOnChanges");
    console.log(changes.selectedCity.currentValue);
 
    this.selectedPokemon = changes.selectedPokemon.currentValue;
 
    console.log("WEATHER ngOnChanges this.selectedPokemon");
    console.log(this.selectedPokemon);
 
    this.fetchDetails();
  }

  fetchDetails() {

    console.log("WEATHER fetchDetails city param:");
    console.log(this.selectedPokemon);
    this.http.get('https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          appid: 'bf25cd5ef59462cd34f7dc2b91e34ab0',


          id: this.selectedPokemon.id.toString(), // le id de la ville doit etre envoye en string
          units: 'metric',
          cnt: '10'
        },
        // headers: this.httpOptions.headers
      }).subscribe(data => {

        Object.assign(this.selectedPokemon, data); // rajoute tout l'objet obtenu par internet a l'objet en cours : allez le visualiser dans la console du navigateur!
        //this.result = data;

        console.log("this.selectedCity APRES Object.assign: ");
        console.log(this.selectedPokemon);


      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log(err);
          }
        });
  }

/*   constructor() { }

  ngOnInit() {
  } */

}
