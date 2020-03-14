import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyvilleComponent } from './myville.component';
import { FormsModule } from '@angular/forms';
import { MyvilleRoutingModule } from './myville-routing.module';



@NgModule({
  declarations: [
    MyvilleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MyvilleRoutingModule
  ],
  exports: [
    MyvilleComponent  ////très important car ville ne soccupe plus de meteo, ils sont frères
  ]
})
export class MyvilleModule { }
