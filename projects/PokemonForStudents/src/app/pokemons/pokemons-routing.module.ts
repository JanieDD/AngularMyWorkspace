import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MypokemonComponent } from './mypokemon/mypokemon.component';


const routes: Routes = [
  { path: 'mypokemon', component: MypokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
