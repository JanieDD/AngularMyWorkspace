import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VilleModule } from './ville/ville.module';
import { MeteoModule } from './meteo/meteo.module';
import { TestObservableModule } from './test-observable/test-observable.module';
import { VilleService } from './ville.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    VilleModule,
    MeteoModule,
    TestObservableModule
  ],
  providers: [
    VilleService
/*     @Injectable({   //en ayant mis ceci dans le ville.service on a pas besoin de le mettre dans le provider
      providedIn: 'root'  root c'est global à l'application
    }) */
  ],
  bootstrap: [AppComponent],
  entryComponents: [PageNotFoundComponent]
})
export class AppModule { }
