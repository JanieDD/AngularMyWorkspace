import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypokemonComponent } from './mypokemon/mypokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HttpClientModule } from '@angular/common/http';  //Même dans le weather
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MypokemonComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // à ajouter aussi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
