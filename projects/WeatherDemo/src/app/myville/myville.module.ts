import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyvilleComponent} from './myville.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyvilleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyvilleComponent  ////très important car ville ne soccupe plus de meteo, ils sont frères
  ]
})
export class MyvilleModule { }
