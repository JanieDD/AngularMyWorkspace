import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MypokemonComponent} from './mypokemon/mypokemon.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PokemonDetailComponent,
    MypokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }
