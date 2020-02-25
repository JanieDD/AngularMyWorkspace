import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PokemonDetailComponent
  ]
})
export class PokemonDetailModule { }
