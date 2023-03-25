import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {filter, map, Observable, of, take} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {GetCreatives} from "../store/actions/creatives.actions";
import {AppState} from "../store/state";
import {selectCreativesList} from "../store/selectors/creatives.selector";
import {CreativeModel} from "../models/creatives-model";
import {ERoutes} from "../router/models";

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<CreativeModel[] | boolean> {

  constructor(private _store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CreativeModel[] | boolean> {
    if (route.routeConfig?.path === ERoutes.CREATIVES) {
      this._store.dispatch(new GetCreatives())
      return this._store.pipe(select(selectCreativesList)).pipe(
        filter(creatives => !!creatives.length),
        take(1)
      )
    }
    return of(false)
  }
}
