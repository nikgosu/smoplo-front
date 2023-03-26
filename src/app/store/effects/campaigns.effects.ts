import {Injectable} from "@angular/core";
import {HttpAPIService} from "../../services/http-api.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../state";
import {
  CreateCampaign,
  CreateCampaignSuccess,
  ECampaignsActions,
  GetCampaign,
  GetCampaigns,
  GetCampaignsSuccess,
  GetCampaignSuccess
} from "../actions/campaigns.actions";

@Injectable()
export class CampaignsEffects {
  constructor(
    private _actions$: Actions,
    private _httpAPI: HttpAPIService,
    private _store: Store<AppState>
  ) {
  }

  getCampaign$ = createEffect(() => this._actions$.pipe(
    ofType<GetCampaign>(ECampaignsActions.GET_CAMPAIGN),
    mergeMap(action => this._httpAPI.getCampaign(action.payload)
      .pipe(map((campaign) => (new GetCampaignSuccess(campaign))))
    )
  ))
  getCampaigns$ = createEffect(() => this._actions$.pipe(
    ofType<GetCampaigns>(ECampaignsActions.GET_CAMPAIGNS),
    mergeMap(action => this._httpAPI.getCampaigns(action.payload)
      .pipe(map((campaigns) => (new GetCampaignsSuccess(campaigns))))
    )
  ))
  createCampaign$ = createEffect(() => this._actions$.pipe(
    ofType<CreateCampaign>(ECampaignsActions.CREATE_CAMPAIGN),
    mergeMap((action) => this._httpAPI.createCampaign(action.payload)
      .pipe(map(campaign => (new CreateCampaignSuccess(campaign))))
    )
  ))
}
