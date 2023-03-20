import {initialConfigState} from "../state/config.state";
import {ConfigActions, EConfigActions} from "../actions/config.actions";

export const configReducers = (state = initialConfigState, action: ConfigActions): any => {
  switch (action.type) {
    case EConfigActions.GET_CONFIG_SUCCESS: {
      return {
        ...state,
        config: action.payload
      }
    }
    default:
      return state
  }
}
