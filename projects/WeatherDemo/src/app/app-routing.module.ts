import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyweatherComponent} from './meteo/myweather/myweather.component';
import {MyvilleComponent} from './myville/myville.component';
import {MeteoCourantComponent} from './meteo/meteo-courant/meteo-courant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'mymeteo', component: MyweatherComponent },
  { path: 'myville', component: MyvilleComponent },
  { path: 'meteo-courant', component: MeteoCourantComponent },
  {
    path: '',
    redirectTo: '/myville',
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
