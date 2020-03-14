import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyweatherComponent } from './myweather.component';
//import {MeteoCourantComponent} from '../meteo-courant/meteo-courant.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyweatherComponent
    //  MeteoCourantComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyweatherComponent
    //  MeteoCourantComponent
  ]
})
export class MyweatherModule { }
