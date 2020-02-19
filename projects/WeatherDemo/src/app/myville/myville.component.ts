import { Component, OnInit } from '@angular/core';
import { ICity } from '../ICity';
import * as cityList from './city.list.json';  //pour avoir la liste de ville que nous avons rajouté
import { VilleService } from '../ville.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myville',
  templateUrl: './myville.component.html',
  styleUrls: ['./myville.component.css']
})
export class MyvilleComponent implements OnInit {

  listOfCities;  // variable a rajouter pour la liste de ville

  selectedCity: ICity;
  defaultCity;


  constructor(private http: HttpClient, private villeservice: VilleService) {
    
    /*     this.selectedCity = {
          id: 6145489,
          name: "Shawinigan",
          country: "CA",
          coord: {
            lon: -72.74913,
            lat: 46.56675
          }
        }; */

    console.log("CITY constructor this.selectedCity: ")
    console.log(this.selectedCity);

  }

  ngOnInit() {
    this.listOfCities = cityList;
    console.log("Liste des villes: ");
    console.log(this.listOfCities);
    this.villeservice.getSelectedCity().subscribe(
      value => {
        this.selectedCity = value;
      }
    );

    console.log("Liste des villes: ");
    console.log(this.listOfCities);
    console.log("this.selectedCity avantla requete http et Object.assign: ");
    console.log(this.selectedCity);
  }
  /* 
          this.listOfCities = cityList;
          console.log("Liste des villes: ");
          console.log(this.listOfCities); */

  onSelect(event, city): void {

    this.villeservice.setSelectedCity(city);

    console.log("CITY onSelect event: ");
    console.log(event);
    console.log("CITY onSelect selected city object: ");
    console.log(city);

    console.log("CITY onSelect selected city name: " + this.selectedCity.name);

  }

  /*   constructor(private http: HttpClient) {
      this.selectedCity = this.defaultCity;
    } */

  /*   ngOnInit() {
      this.http.get('https://api.openweathermap.org/data/2.5/forecast',
        {
          params: {
            appid: 'bf25cd5ef59462cd34f7dc2b91e34ab0', // ici mettre la clé que vous avez reçu en vous inscrivant sur le site openweather
            /* lon: '-72.6873',
            lat: '46.6162', */
  /* 
            id: this.selectedCity.id.toString(),
            units: 'metric',
            cnt: '10'
          },
          // headers: this.httpOptions.headers
        }).subscribe(data => {
  
          //this.selectedCity = data;
          Object.assign(this.selectedCity, data);
          console.log("onInit = " + this.selectedCity.name);
  
        },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("Client-side error occured:");
              console.log(err);
            } else {
              console.log("Server-side error occured:");
              console.log(err);
            }
          });
    }  */

}
