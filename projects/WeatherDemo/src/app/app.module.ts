import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MyvilleModule} from './myville/myville.module';
import {MyweatherModule} from './myweather/myweather.module';
import { VilleService } from './ville.service';

 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyvilleModule,
    MyweatherModule,
    FormsModule
  ],
  providers: [
    VilleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
