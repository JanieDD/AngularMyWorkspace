import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';
import { CombatCenterComponent } from './combat-center/combat-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';


@NgModule({
  declarations: [
    AppComponent,
    CombatCenterComponent,
    PageNotFoundComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonsModule
  ],
  exports: [
  CombatCenterComponent
],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}


