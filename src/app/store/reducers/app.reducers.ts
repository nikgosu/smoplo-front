import {ActionReducerMap} from "@ngrx/store";
import {creativesReducers} from "./creatives.reducers";
import {AppState} from "../state";

export const appReducers: ActionReducerMap<AppState, any> = {
  creatives: creativesReducers,
}
