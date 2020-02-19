import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VilleRoutingModule } from './ville-routing.module';
import { VilleComponent } from './ville.component';


@NgModule({
  declarations: [
    VilleComponent  
  ],
  imports: [
    CommonModule,
    VilleRoutingModule,
    FormsModule
  ],
  exports: [
    VilleComponent  ////très important car ville ne soccupe plus de meteo, ils sont frères
  ]
 
})
export class VilleModule { }
