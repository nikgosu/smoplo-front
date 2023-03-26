import { Injectable } from '@angular/core';
import {ERoutes} from "../router/models";
import {DeleteCreative, GetCreatives} from "../store/actions/creatives.actions";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/state";
import {selectCreativesList} from "../store/selectors/creatives.selector";
import {GetCampaigns} from "../store/actions/campaigns.actions";
import {UserService} from "./user.service";
import {selectCampaignsList} from "../store/selectors/campaigns.selector";
import {CampaignsService} from "./campaigns.service";
import {GetPlacements} from "../store/actions/placements.actions";
import {selectPlacementsList} from "../store/selectors/placements.selector";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private _store: Store<AppState>,
    private _userService: UserService,
    private _campaignsService: CampaignsService,
  ) { }

  getList(route?: string, activatedRoute?: any) {
    const id = activatedRoute._futureSnapshot.params.id
    switch (route) {
      case ERoutes.CAMPAIGNS:
        this._store.dispatch(new GetCampaigns(this._userService.user._id))
        return this._store.pipe(select(selectCampaignsList))
      case ERoutes.PLACEMENTS:
        this._store.dispatch(new GetCampaigns(this._userService.user._id))
        this._store.dispatch(new GetPlacements({userId: this._userService.user._id}))
        return this._store.pipe(select(selectPlacementsList))
      case ERoutes.CAMPAIGN_PLACEMENTS:
        this._store.dispatch(new GetPlacements({campaignId: id}))
        return this._store.pipe(select(selectPlacementsList))
      case ERoutes.CREATIVES:
        this._store.dispatch(new GetPlacements({userId: this._userService.user._id}))
        this._store.dispatch(new GetCreatives({userId: this._userService.user._id}))
        return this._store.pipe(select(selectCreativesList))
      case ERoutes.PLACEMENT_CREATIVES:
        this._store.dispatch(new GetCreatives({placementId: id}))
        return this._store.pipe(select(selectCreativesList))
      default:
        return null
    }
  }

  deleteListItem(route: string, listItem: any) {
    switch (route) {
      case ERoutes.CREATIVES:
        this._store.dispatch(new DeleteCreative(listItem))
        return
      default:
        return null
    }
  }
}
