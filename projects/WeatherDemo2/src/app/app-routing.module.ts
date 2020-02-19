import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestObserverComponent } from './test-observable/test-observer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MeteoCourantComponent} from './meteo/meteo-courant/meteo-courant.component';
import {MeteoComponent} from './meteo/meteo.component';



const routes: Routes = [
  { path: 'test-observer', component: TestObserverComponent },  //mettre les paths statics en premier
  { path: 'meteo-courant/:id', component: MeteoCourantComponent },
  { path: 'meteo/:id', component: MeteoComponent },

  {
    path: '',
    redirectTo: '/test-observer',                   //path vide en deuxième
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }        // path ** toujours en dernier

];

@NgModule({
  imports: [RouterModule.forRoot(
    //appRoutes,
    routes,
    { enableTracing: true }  //Pouvoir suivre le tracing (debugg)

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
