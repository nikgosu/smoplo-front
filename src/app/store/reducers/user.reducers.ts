import {UserState} from "../state";
import {initialUserState} from "../state/user.state";
import {EUserActions, UserActions} from "../actions/user.actions";

export const userReducers = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case EUserActions.CREATE_USER_SUCCESS: {
      localStorage.removeItem('token')
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload
      }
    }
    case EUserActions.LOGIN_SUCCESS: {
      localStorage.removeItem('token')
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload
      }
    }
    case EUserActions.GET_IS_AUTH_SUCCESS: {
      localStorage.removeItem('token')
      localStorage.getItem('token')
      console.log(action.payload)
      return {
        ...state,
        user: action.payload
      }
    }
    case EUserActions.LOGOUT_SUCCESS: {
      localStorage.removeItem('token')
      return {
        ...state,
        user: null
      }
    }
    default:
      return state
  }
}
