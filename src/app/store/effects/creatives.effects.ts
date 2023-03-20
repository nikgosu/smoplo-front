import {Injectable} from "@angular/core";
import {HttpAPIService} from "../../services/http-api.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  CreateCreative,
  CreateCreativeSuccess,
  DeleteCreative,
  DeleteCreativeSuccess,
  ECreativesActions,
  GetCreative,
  GetCreatives, GetCreativesSuccess,
  GetCreativeSuccess,
  UpdateCreative,
  UpdateCreativeSuccess
} from "../actions/creatives.actions";
import {map, mergeMap} from "rxjs";
import {Store} from "@ngrx/store";

@Injectable()
export class CreativesEffects {
  constructor(
    private _actions$: Actions,
    private _httpAPI: HttpAPIService,
    private _store: Store<any>
  ) {
  }
  getCreative$ = createEffect(() => this._actions$.pipe(
    ofType<GetCreative>(ECreativesActions.GET_CREATIVE),
    mergeMap((action: any) => this._httpAPI.getCreative(action.payload)
      .pipe(map(creative => (new GetCreativeSuccess(creative))))
    )
  ))
  getCreatives$ = createEffect(() => this._actions$.pipe(
    ofType<GetCreatives>(ECreativesActions.GET_CREATIVES),
    mergeMap(() => this._httpAPI.getCreatives()
      .pipe(map(creatives => (new GetCreativesSuccess(creatives))))
    )
  ))
  createCreative$ = createEffect(() => this._actions$.pipe(
    ofType<CreateCreative>(ECreativesActions.CREATE_CREATIVE),
    mergeMap((action: any) => this._httpAPI.createCreative(action.payload)
      .pipe(map(creative => (new CreateCreativeSuccess(creative))))
    )
  ))
  updateCreative$ = createEffect(() => this._actions$.pipe(
    ofType<UpdateCreative>(ECreativesActions.UPDATE_CREATIVE),
    mergeMap((action: any) => this._httpAPI.updateCreative(action.payload)
      .pipe(map(creative => (new UpdateCreativeSuccess(creative))))
    )
  ))
  deleteCreatives$ = createEffect(() => this._actions$.pipe(
    ofType<DeleteCreative>(ECreativesActions.DELETE_CREATIVE),
    mergeMap((action: any) => this._httpAPI.deleteCreative(action.payload)
      .pipe(map(creative => (new DeleteCreativeSuccess(creative))))
    )
  ))
}
