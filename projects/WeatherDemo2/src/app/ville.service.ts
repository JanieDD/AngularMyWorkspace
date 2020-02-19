import { Injectable } from '@angular/core';
import { ICity } from './ICity';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  //root c'est global à l'application
})
export class VilleService {

  private cityBehaviorSubject: BehaviorSubject<ICity>;  //deux variables pour exercice
  private selectedCity: ICity;


  defaultCity;
  // selectedCityFromCity;


  constructor() {
    this.defaultCity = {
      id: 6145489,
      name: "Shawinigan",
      country: "CA",
      coord: {
        lon: -72.74913,
        lat: 46.56675
      }
    };
    this.selectedCity = this.defaultCity;
    this.cityBehaviorSubject = new BehaviorSubject(this.selectedCity); //Pour exercice

    console.log("VILLE.SERVICE constructor: defaultCity = ");
    console.log(this.defaultCity);

  }


  /* getVille() {
    console.log("VILLE.SERVICE getVille: defaultCity = ");
    console.log(this.defaultCity);
  
     console.log("VILLE.SERVICE gerVille:  selectedCityFromCity = ");
     console.log(this.selectedCityFromCity.selectedCity);
    return this.selectedCityFromCity;
  } */


  // Pour exercice
  getSelectedCity(): Observable<ICity> {
    return this.cityBehaviorSubject.asObservable();
  }

  setSelectedCity(selectedCity: ICity) {
    this.selectedCity = selectedCity;
    this.cityBehaviorSubject.next(selectedCity);
    console.log("Ville Service");
    console.log(selectedCity);
  }




}
