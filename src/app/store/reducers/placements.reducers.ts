import {PlacementsState} from "../state";
import {initialPlacementsState} from "../state/placements.state";
import {EPlacementsActions, PlacementsActions} from "../actions/placements.actions";

export const placementsReducers = (state = initialPlacementsState, action: PlacementsActions): PlacementsState => {
  switch (action.type) {
    case EPlacementsActions.GET_PLACEMENT_SUCCESS: {
      return {
        ...state,
        selectedPlacement: action.payload
      }
    }
    case EPlacementsActions.GET_PLACEMENTS_SUCCESS: {
      return {
        ...state,
        placements: action.payload
      }
    }
    case EPlacementsActions.CREATE_PLACEMENT_SUCCESS: {
      return {
        ...state,
        placements: [...state.placements, action.payload]
      }
    }
    default:
      return state
  }
}
