import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {filter, Observable, of, take} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {GetCreative} from "../store/actions/creatives.actions";
import {AppState} from "../store/state";
import {selectSelectedCreative} from "../store/selectors/creatives.selector";
import {ERoutes} from "../router/models";

@Injectable({
  providedIn: 'root'
})
export class ListItemResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const path = route.routeConfig?.path
    switch (path) {
      case ERoutes.CREATIVE:
        this._store.dispatch(new GetCreative(route.paramMap.get('id') ?? ''))
        return this._store.pipe(select(selectSelectedCreative)).pipe(
          filter((data: any) => data),
          take(1)
        )
      default:
        return of(false)
    }


  }
}
