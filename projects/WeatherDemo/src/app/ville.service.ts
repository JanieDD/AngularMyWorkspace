import { Injectable } from '@angular/core';
import { ICity } from './ICity';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'  //root c'est global à l'application
})
export class VilleService {

  private selectedCity: ICity;
  private cityBehaviorSubject: BehaviorSubject<ICity>;


  defaultCity;
 


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
    this.cityBehaviorSubject = new BehaviorSubject(this.selectedCity);

    console.log("VILLE.SERVICE constructor: defaultCity = ");
    console.log(this.defaultCity);

  }

  getSelectedCity(): Observable<ICity> {
    return this.cityBehaviorSubject.asObservable();
/*     console.log("VILLE.SERVICE getVille: defaultCity = ");
    console.log(this.defaultCity);
 
     console.log("VILLE.SERVICE gerVille:  selectedCityFromCity = ");
     console.log(this.selectedCityFromCity.selectedCity);
    return this.selectedCityFromCity; */

  }

  setSelectedCity(selectedCity: ICity) {
    this.selectedCity = selectedCity;
    this.cityBehaviorSubject.next(selectedCity);
    console.log("Ville Service");
    console.log(selectedCity);
  }
}
