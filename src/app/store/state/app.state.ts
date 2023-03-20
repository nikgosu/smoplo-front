import {initialCreativesState} from "./creatives.state";
import {initialConfigState} from "./config.state";

export const initialAppState: any = {
  creatives: initialCreativesState,
  config: initialConfigState
}
export function getInitialState (): any {
  return initialAppState
}
