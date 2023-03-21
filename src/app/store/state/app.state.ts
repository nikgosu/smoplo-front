import {initialCreativesState} from "./creatives.state";
import {AppState} from "./index";

export const initialAppState: AppState = {
  creatives: initialCreativesState,
}

export function getInitialState(): AppState {
  return initialAppState
}
