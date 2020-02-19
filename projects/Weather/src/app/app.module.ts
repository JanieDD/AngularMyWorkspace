import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyweatherComponent } from './myweather/myweather.component';
import { MyvilleComponent } from './myville/myville.component';


@NgModule({
  declarations: [
    AppComponent,
    MyweatherComponent,
    MyvilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
