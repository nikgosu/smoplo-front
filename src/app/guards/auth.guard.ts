import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/state";
import {selectCurrentUser} from "../store/selectors/user.selector";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user$ = this._store.pipe(select(selectCurrentUser))
  user!: any

  constructor(
    private _store: Store<AppState>,
    private _router: Router
  ) {
    this.user$.subscribe(user => {
      this.user = user
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    !this.user && this._router.navigate(['login'])
    return !!this.user;
  }

}
