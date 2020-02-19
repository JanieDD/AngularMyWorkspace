import { Component, OnInit } from '@angular/core';
import * as cityList from './city.list.json';  //pour avoir la liste de ville que nous avons rajouté
import { ICity } from '../ICity';
import { HttpClient } from '@angular/common/http';
import { VilleService } from '../ville.service';


@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})

export class VilleComponent implements OnInit {

  listOfCities;  // variable a rajouter pour la liste de ville

  defaultCities;
  selectedCity: ICity;

  constructor(private villeservice: VilleService) {

    //this.selectedCity = this.defaultCities;
    console.log("WEATHER constructor");

    console.log("this.selectedCity = ");
    console.log(this.selectedCity);
 
    console.log("WEATHER constructor");

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

/*     this.selectedCity = {
      id: 6145489,
      name: "Shawinigan",
      country: "CA",
      coord: {
        lon: -72.74913,
        lat: 46.56675
      }
    }; */
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
    console.log("this.selectedCity avan tla requete http et Object.assign: ");
    console.log(this.selectedCity);
  }

  onSelect(event, city): void {
    
    this.villeservice.setSelectedCity(city);
    
    console.log("CITY onSelect event: ");
    console.log(event);
    console.log("CITY onSelect selected city object: ");
    console.log(city);

    console.log("CITY onSelect selected city name: " + this.selectedCity.name);

  }
}
