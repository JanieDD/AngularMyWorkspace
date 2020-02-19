import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  //importer le observable

@Injectable({
  providedIn: 'root'
 })
 
 export class TestService {
  private observable: Observable<any>;
  constructor() {
    this.observable = new Observable(observer => {
      setTimeout(
        () => observer.next('hello from Observable!'), 10000);
    });
  }
  getObservable() {
    return this.observable;
  }
 }
 
