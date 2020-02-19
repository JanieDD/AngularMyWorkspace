import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICity } from '../ICity';
import {VilleService} from '../ville.service';


@Component({
  selector: 'app-meteo',
  templateUrl: `./meteo.component.html`,
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {


    @Input() selectedCity;
  
  defaultCities;

  constructor(private http: HttpClient, private villeservice : VilleService) {
    //this.selectedCity = this.defaultCities;
    console.log("WEATHER constructor");

    console.log("this.selectedCity = ");
    console.log(this.selectedCity);
  }
  ngOnInit() {
    this.villeservice.getSelectedCity().subscribe(
      value => {
        this.selectedCity = value;
        this.fetchDetails();
        console.log('subscribe weather' + this.selectedCity);
      }
    );
  } 


/*   ngOnInit() {
    console.log("WEATHER ngOnInit AVANT fetchDetails");
    console.log("WEATHER this.selectedCity = ");
    console.log(this.selectedCity);
    this.fetchDetails();
  } */
 
/*   ngOnChanges(changes: SimpleChanges): void {  //rajouter cette fonction et enlever du OnInit
                            
    console.log("WEATHER ngOnChanges");
    console.log(changes.selectedCity.currentValue);
 
    this.selectedCity = changes.selectedCity.currentValue;
 
    console.log("WEATHER ngOnChanges this.selectedCity");
    console.log(this.selectedCity);
 
    this.fetchDetails();
  } */

    fetchDetails() {

    console.log("WEATHER fetchDetails city param:");
    console.log(this.selectedCity);
    
    //this.http.get('api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}',
    //this.http.get('https://openweathermap.org/current',
    this.http.get('https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          appid: 'bf25cd5ef59462cd34f7dc2b91e34ab0',


          id: this.selectedCity.id.toString(), // le id de la ville doit etre envoye en string
          units: 'metric',
          cnt: '10'
        },
        // headers: this.httpOptions.headers
      }).subscribe(data => {

        Object.assign(this.selectedCity, data); // rajoute tout l'objet obtenu par internet a l'objet en cours : allez le visualiser dans la console du navigateur!
        //this.result = data;

        console.log("this.selectedCity APRES Object.assign: ");
        console.log(this.selectedCity);


      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log(err);
          }
        });
  }  


}
