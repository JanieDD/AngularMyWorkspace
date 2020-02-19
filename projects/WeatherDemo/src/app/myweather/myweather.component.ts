import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ICity } from '../ICity';
import {VilleService} from '../ville.service';


@Component({
  selector: 'app-myweather',
  templateUrl: './myweather.component.html',
  styleUrls: ['./myweather.component.css']
})
export class MyweatherComponent implements OnInit {

  //@Input() 
  selectedCity: ICity;
  //selectedCityFromService;

  constructor(private http: HttpClient, private villeservice : VilleService) {
    console.log("WEATHER constructor");

    console.log("this.selectedCity = ");
    console.log(this.selectedCity);

/*     this.selectedCity = {
      id: 6145489,
      name: "Shawinigan",
      country: "CA",
      coord: {
        lon: -72.74913,
        lat: 46.56675
      }
    };

    console.log("WEATHER constructor");

    console.log("this.selectedCity = ");
    console.log(this.selectedCity); */

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

/*   constructor(private http: HttpClient) { }

  ngOnInit() {


    console.log(this.city);
  } */

}
