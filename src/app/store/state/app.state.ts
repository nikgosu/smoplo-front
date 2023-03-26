import {initialCreativesState} from "./creatives.state";
import {AppState} from "./index";
import {initialUserState} from "./user.state";
import {initialCampaignsState} from "./campaigns.state";
import {initialPlacementsState} from "./placements.state";

export const initialAppState: AppState = {
  user: initialUserState,
  campaigns: initialCampaignsState,
  placements: initialPlacementsState,
  creatives: initialCreativesState,
}

export function getInitialState(): AppState {
  return initialAppState
}
