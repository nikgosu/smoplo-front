import {ActionReducerMap} from "@ngrx/store";
import {creativesReducers} from "./creatives.reducers";
import {configReducers} from "./config.reducers";

export const appReducers: ActionReducerMap<any, any> = {
  creatives: creativesReducers,
  config: configReducers
}
