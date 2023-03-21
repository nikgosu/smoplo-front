import {initialCreativesState} from "../state/creatives.state";
import {CreativesActions, ECreativesActions} from "../actions/creatives.actions";
import {CreativeModel} from "../../models/creatives-model";
import {CreativesState} from "../state";

export const creativesReducers = (state = initialCreativesState, action: CreativesActions): CreativesState => {
  switch (action.type) {
    case ECreativesActions.GET_CREATIVE_SUCCESS: {
      return {
        ...state,
        selectedCreative: action.payload
      }
    }
    case ECreativesActions.GET_CREATIVES_SUCCESS: {
      return {
        ...state,
        creatives: action.payload
      }
    }
    case ECreativesActions.CREATE_CREATIVE_SUCCESS: {
      return {
        ...state,
        creatives: [...state.creatives, action.payload]
      }
    }
    case ECreativesActions.UPDATE_CREATIVE_SUCCESS: {
      return {
        ...state,
        creatives: state.creatives.map((creative: CreativeModel) => creative._id === action.payload._id ? action.payload : creative)
      }
    }
    case ECreativesActions.DELETE_CREATIVE_SUCCESS: {
      return {
        ...state,
        creatives: state.creatives.filter((creative: CreativeModel) => creative._id !== action.payload._id)
      }
    }
    default:
      return state
  }
}
