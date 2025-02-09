import { Component, OnInit } from '@angular/core';
import { VilleService } from '../../ville.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-meteo-courant',
  templateUrl: './meteo-courant.component.html',
  styleUrls: ['./meteo-courant.component.css']
})
export class MeteoCourantComponent implements OnInit {

  //@Input() 
  selectedCity;
  
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

  fetchDetails() {

    console.log("WEATHER fetchDetails city param:");
    console.log(this.selectedCity);
    
    
    this.http.get('https://api.openweathermap.org/data/2.5/weather',
    //this.http.get('https://openweathermap.org/current',
    //this.http.get('https://api.openweathermap.org/data/2.5/forecast',
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
