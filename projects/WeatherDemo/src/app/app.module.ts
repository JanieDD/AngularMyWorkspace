import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MyvilleModule} from './myville/myville.module';
import { VilleService } from './ville.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MeteoModule } from './meteo/meteo.module';

 


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyvilleModule,
    MeteoModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [
    VilleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
