import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyweatherComponent } from './myweather/myweather.component';
import { MeteoCourantComponent } from './meteo-courant/meteo-courant.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MyvilleComponent } from '../myville/myville.component';


const routes: Routes = [
  { path: 'mymeteo/:name', component: MyweatherComponent },
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
