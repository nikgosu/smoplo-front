import {UserState} from "../state";
import {initialUserState} from "../state/user.state";
import {EUserActions, UserActions} from "../actions/user.actions";

export const userReducers = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case EUserActions.CREATE_USER_SUCCESS: {
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        user: action.payload
      }
    }
    case EUserActions.LOGIN_SUCCESS: {
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        user: action.payload
      }
    }
    case EUserActions.GET_IS_AUTH_SUCCESS: {
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        user: action.payload
      }
    }
    default:
      return state
  }
}
