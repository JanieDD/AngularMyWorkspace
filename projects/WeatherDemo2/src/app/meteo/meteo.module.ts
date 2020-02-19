import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoRoutingModule } from './meteo-routing.module';
import { MeteoComponent } from './meteo.component';
import {MeteoCourantComponent} from './meteo-courant/meteo-courant.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MeteoComponent,
    MeteoCourantComponent   
  ],
  imports: [
    CommonModule,
    MeteoRoutingModule,
    FormsModule
  ],
  exports: [
    MeteoComponent,    //très important car meteo ne soccupe plus de ville, ils sont frères
    MeteoCourantComponent
  ]
})
export class MeteoModule { }
