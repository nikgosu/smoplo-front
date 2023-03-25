import { Injectable } from '@angular/core';
import {ERoutes} from "../router/models";
import {DeleteCreative, GetCreatives} from "../store/actions/creatives.actions";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/state";
import {selectCreativesList} from "../store/selectors/creatives.selector";
import {GetCampaigns} from "../store/actions/campaigns.actions";
import {UserService} from "./user.service";
import {selectCampaignsList} from "../store/selectors/campaigns.selector";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private _store: Store<AppState>,
    private _userService: UserService,
  ) { }

  getList(route?: string) {
    switch (route) {
      case ERoutes.CREATIVES:
        this._store.dispatch(new GetCreatives())
        return this._store.pipe(select(selectCreativesList))
      case ERoutes.CAMPAIGNS:
        this._store.dispatch(new GetCampaigns(this._userService.user._id))
        return this._store.pipe(select(selectCampaignsList))
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
