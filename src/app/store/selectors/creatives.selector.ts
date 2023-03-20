import {createSelector} from "@ngrx/store";

const selectCreatives = (state: any) => {
  return state.creatives
}

export const selectCreativesList = createSelector(
  selectCreatives,
  (state: any) => state.creatives
)

export const selectSelectedCreative = createSelector(
  selectCreatives,
  (state: any) => state.selectedCreative
)
