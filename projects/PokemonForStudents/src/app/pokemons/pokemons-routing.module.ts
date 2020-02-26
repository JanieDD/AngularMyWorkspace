import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MypokemonComponent } from './mypokemon/mypokemon.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  { path: 'mypokemon', component: MypokemonComponent },
  { path: 'pokemon-detail/:name', component: PokemonDetailComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
