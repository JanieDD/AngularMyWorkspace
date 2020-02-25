import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MypokemonComponent } from './mypokemon.component'



@NgModule({
  declarations: [
    MypokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MypokemonComponent
  ]
})
export class MypokemonModule { }
