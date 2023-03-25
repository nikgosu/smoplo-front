import {ActionReducerMap} from "@ngrx/store";
import {creativesReducers} from "./creatives.reducers";
import {AppState} from "../state";
import {userReducers} from "./user.reducers";
import {campaignsReducers} from "./campaigns.reducers";

export const appReducers: ActionReducerMap<AppState, any> = {
  user: userReducers,
  campaigns: campaignsReducers,
  creatives: creativesReducers
}
