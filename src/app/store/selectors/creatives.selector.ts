import {createSelector} from "@ngrx/store";
import {AppState, CreativesState} from "../state";

const selectCreatives = (state: AppState) => {
  return state.creatives
}

export const selectCreativesList = createSelector(
  selectCreatives,
  (state: CreativesState) => state.creatives
)

export const selectSelectedCreative = createSelector(
  selectCreatives,
  (state: CreativesState) => state.selectedCreative
)
