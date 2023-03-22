import {AppState, CreativesState, UserState} from "../state";
import {createSelector} from "@ngrx/store";

const selectUser = (state: AppState) => {
  return state.user
}

export const selectCurrentUser = createSelector(
  selectUser,
  (state: UserState) => state.user
)
