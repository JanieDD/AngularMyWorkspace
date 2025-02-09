import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IPokemon } from '../IPokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }


  // @Input() selectedPokemon;
  selectedPokemon: IPokemon;

  constructor(private http: HttpClient, private pokemonService: PokemonService) {
    //console.log("selectedPokemon in details: " + this.pokemon);


  }

  ngOnInit() {
    this.pokemonService.getSelectedPokemon().subscribe(
      value => {
        this.selectedPokemon = value;
        this.fetchDetails();
        console.log('subscribe pokemon' + this.selectedPokemon);
      }
    );
  }

  /*   ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      console.log("POK DETAIL ngOnChanges changes param = ");
      console.log(changes);
  
      this.selectedPokemon = changes.selectedPokemon.currentValue;
      this.fetchDetails(this.selectedPokemon);
      console.log("POK DETAIL ngOnChanges this.selectedPokemon = ");
      console.log(this.selectedPokemon);
  
    } */

  fetchDetails() {

    this.http.get(this.selectedPokemon.url).subscribe(data => {

      Object.assign(this.selectedPokemon, data); // rajoute tout l'objet obtenu par internet a l'objet en cours : allez le visualiser dans la console du navigateur!
      //this.result = data;

      console.log("this.selectedPokemon APRES Object.assign: ");
      console.log(this.selectedPokemon);

      // iterer dans l'objet pour obtenir l'url de chaque pokemon


      //console.log(element);



      console.log(this.selectedPokemon);
      //console.log(this.pokemonsDetails);

    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log(err);
        }
      });
    /*     this.http.get(pok.url.toString(),
          {
          }).subscribe((data) => {
            Object.assign(this.selectedPokemon, data);
            console.log(pok);
          },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log(err);
              }
            }); */

  }

}
