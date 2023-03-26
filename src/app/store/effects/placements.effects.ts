import {Injectable} from "@angular/core";
import {HttpAPIService} from "../../services/http-api.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../state";
import {
  CreatePlacement,
  CreatePlacementSuccess,
  EPlacementsActions,
  GetPlacement,
  GetPlacements,
  GetPlacementsSuccess,
  GetPlacementSuccess
} from "../actions/placements.actions";

@Injectable()
export class PlacementsEffects {
  constructor(
    private _actions$: Actions,
    private _httpAPI: HttpAPIService,
    private _store: Store<AppState>
  ) {
  }

  getPlacement$ = createEffect(() => this._actions$.pipe(
    ofType<GetPlacement>(EPlacementsActions.GET_PLACEMENT),
    mergeMap(action => this._httpAPI.getPlacement(action.payload)
      .pipe(map((placement) => (new GetPlacementSuccess(placement))))
    )
  ))
  getPlacements$ = createEffect(() => this._actions$.pipe(
    ofType<GetPlacements>(EPlacementsActions.GET_PLACEMENTS),
    mergeMap(action => this._httpAPI.getPlacements(action.payload)
      .pipe(map((placements) => (new GetPlacementsSuccess(placements))))
    )
  ))
  createPlacement$ = createEffect(() => this._actions$.pipe(
    ofType<CreatePlacement>(EPlacementsActions.CREATE_PLACEMENT),
    mergeMap((action) => this._httpAPI.createPlacement(action.payload)
      .pipe(map(placement => (new CreatePlacementSuccess(placement))))
    )
  ))
}
