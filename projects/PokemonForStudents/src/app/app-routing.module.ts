import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatCenterComponent} from './combat-center/combat-center.component';
import { MypokemonComponent} from './pokemons/mypokemon/mypokemon.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'combat-center', component: CombatCenterComponent },
  { path: 'mypokemon', component: MypokemonComponent },
  {
    path: '',
    redirectTo: '/mypokemon',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }  //debugg tracing
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
