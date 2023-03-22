import {ActionReducerMap} from "@ngrx/store";
import {creativesReducers} from "./creatives.reducers";
import {AppState} from "../state";
import {userReducers} from "./user.reducers";

export const appReducers: ActionReducerMap<AppState, any> = {
  creatives: creativesReducers,
  user: userReducers
}
