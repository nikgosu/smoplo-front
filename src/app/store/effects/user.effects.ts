import {Injectable} from "@angular/core";
import {HttpAPIService} from "../../services/http-api.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {GetCreativesSuccess} from "../actions/creatives.actions";
import {map, mergeMap} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../state";
import {
  CreateUser,
  CreateUserSuccess,
  EUserActions,
  GetIsAuth,
  GetIsAuthSuccess,
  Login,
  LoginSuccess
} from "../actions/user.actions";
import {Router} from "@angular/router";

@Injectable()
export class UserEffects {
  constructor(
    private _actions$: Actions,
    private _httpAPI: HttpAPIService,
    private _store: Store<AppState>,
    private _router: Router
  ) {
  }

  createUser$ = createEffect(() => this._actions$.pipe(
    ofType<CreateUser>(EUserActions.CREATE_USER),
    mergeMap(action => this._httpAPI.register(action.payload)
      .pipe(map((user) => {
        if (user) this._router.navigate(['/'])
        return new CreateUserSuccess(user)
      }))
    )
  ))
  login$ = createEffect(() => this._actions$.pipe(
    ofType<Login>(EUserActions.LOGIN),
    mergeMap(action => this._httpAPI.login(action.payload)
      .pipe(map(user => {
        if (user) this._router.navigate(['/'])
        return new LoginSuccess(user)
      }))
    )
  ))
  getIsAuth$ = createEffect(() => this._actions$.pipe(
    ofType<GetIsAuth>(EUserActions.GET_IS_AUTH),
    mergeMap(action => this._httpAPI.getIsAuth(action.payload)
      .pipe(map(user => {
        if (user) this._router.navigate(['/'])
        return new GetIsAuthSuccess(user)
      }))
    )
  ))
}
