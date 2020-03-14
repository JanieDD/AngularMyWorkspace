import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoRoutingModule } from './meteo-routing.module';
import { MyweatherComponent } from './myweather/myweather.component';
import { MeteoCourantComponent } from './meteo-courant/meteo-courant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyweatherComponent,
    MeteoCourantComponent
  ],
  imports: [
    CommonModule,
    MeteoRoutingModule,
    FormsModule
  ]
})
export class MeteoModule { }
