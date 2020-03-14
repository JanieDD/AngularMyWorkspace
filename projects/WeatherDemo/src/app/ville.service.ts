import { Injectable } from '@angular/core';
import { ICity } from './ICity';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  //root c'est global à l'application
})
export class VilleService {

  private selectedCity: ICity;
  private cityBehaviorSubject: BehaviorSubject<ICity>;


  defaultCity;
  private listOfVilles: Observable<ICity[]>;
  listOfVilles$: Observable<ICity[]>;


  constructor(private http: HttpClient) {
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

  fetchList(): Observable<ICity[]> {

    // pas de subscribe, pour pouvoir retourner l'observable
    this.listOfVilles$ = this.http.get<ICity[]>('./assets/city.list.json');
    return this.http.get<ICity[]>('./assets/city.list.json'); //test
    // return this.http.get<ICity[]>('https://api.openweathermap.org/data/2.5/forecast');

  }

  fetchDetails(villeName): Observable<ICity> {
    //  let selectedVille = this.http.get<ICity>("https://api.openweathermap.org/data/2.5/forecast" + villeName.toString());
    let selectedCity = this.http.get<ICity>('https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          appid: 'bf25cd5ef59462cd34f7dc2b91e34ab0',
          //id: this.selectedCity.id.toString(), // le id de la ville doit etre envoye en string
          q: villeName,
          units: 'metric',
          cnt: '10'
        },
        // headers: this.httpOptions.headers
      })
    console.log("Ville-SERVICE fetchDetails selectedVille = ");
    console.log(selectedCity);
    return selectedCity;
  }
  getVilles(): Observable<ICity[]> {     //À rajouter

    this.listOfVilles = this.fetchList();
    console.log("SERVICE GETVILLEthis.listOfVilles");
    console.log(this.listOfVilles);

    return this.listOfVilles;
  }

  getVille(villeName: string): Observable<ICity> {

    return this.fetchDetails(villeName);

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
