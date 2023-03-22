import {initialCreativesState} from "./creatives.state";
import {AppState} from "./index";
import {initialUserState} from "./user.state";

export const initialAppState: AppState = {
  creatives: initialCreativesState,
  user: initialUserState
}

export function getInitialState(): AppState {
  return initialAppState
}
