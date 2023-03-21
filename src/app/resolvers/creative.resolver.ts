import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from "@ngrx/store";
import {GetCreative} from "../store/actions/creatives.actions";
import {AppState} from "../store/state";

@Injectable({
  providedIn: 'root'
})
export class CreativeResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this._store.dispatch(new GetCreative(route.paramMap.get('id') ?? ''))
    return of(true);
  }
}
