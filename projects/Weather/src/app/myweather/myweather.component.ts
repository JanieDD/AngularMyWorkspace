import { Component, OnInit } from '@angular/core';
import {Weather} from '../weather';
import {WEATHER} from './mock-weather';

@Component({
  selector: 'app-myweather',
  templateUrl: './myweather.component.html',
  styleUrls: ['./myweather.component.css']
})
export class MyweatherComponent implements OnInit {

  meteoTableau = WEATHER;
  meteoTest: Weather;

  constructor() {
    
    this.meteoTest = {
      id: 123,
      name: "Soleil"
    };
    this.meteoTest.name = "Lune";
    console.log(this.meteoTest);
   }

  ngOnInit() {
  }

}
