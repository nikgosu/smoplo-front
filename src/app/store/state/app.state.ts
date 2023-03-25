import {initialCreativesState} from "./creatives.state";
import {AppState} from "./index";
import {initialUserState} from "./user.state";
import {initialCampaignsState} from "./campaigns.state";

export const initialAppState: AppState = {
  user: initialUserState,
  campaigns: initialCampaignsState,
  creatives: initialCreativesState
}

export function getInitialState(): AppState {
  return initialAppState
}
