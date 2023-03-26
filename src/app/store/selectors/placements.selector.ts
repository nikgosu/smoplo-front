import {createSelector} from "@ngrx/store";
import {AppState, PlacementsState} from "../state";

const selectPlacements = (state: AppState) => {
  return state.placements
}

export const selectPlacementsList = createSelector(
  selectPlacements,
  (state: PlacementsState) => state.placements
)

export const selectSelectedPlacement = createSelector(
  selectPlacements,
  (state: PlacementsState) => state.selectedPlacement
)
