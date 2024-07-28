import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HomeService {

constructor() { }

  public _toggle: BehaviorSubject<string> = new BehaviorSubject(null);
  public toggle$ = this._toggle.asObservable();

  public showCV() {
    this._toggle.next('visible');
  }

  public closeCV() {
    this._toggle.next('invisible');
  }

}
