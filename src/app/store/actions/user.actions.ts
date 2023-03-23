import {Action} from "@ngrx/store";
import {CreativeModel} from "../../models/creatives-model";

export enum EUserActions {
  CREATE_USER = '[USER] Create User',
  CREATE_USER_SUCCESS = '[USER] Create User Success',
  LOGIN = '[USER] Login',
  LOGIN_SUCCESS = '[USER] Login Success',
  GET_IS_AUTH = '[USER] Get Is Auth',
  GET_IS_AUTH_SUCCESS = '[USER] Get Is Auth Success',
  LOGOUT_SUCCESS = '[USER] Logout Success',
}

export class CreateUser implements Action {
  public readonly type = EUserActions.CREATE_USER

  constructor(public payload: any) {
  }
}

export class CreateUserSuccess implements Action {
  public readonly type = EUserActions.CREATE_USER_SUCCESS

  constructor(public payload: any) {
  }
}

export class Login implements Action {
  public readonly type = EUserActions.LOGIN

  constructor(public payload: any) {
  }
}

export class LoginSuccess implements Action {
  public readonly type = EUserActions.LOGIN_SUCCESS

  constructor(public payload: any) {
  }
}

export class GetIsAuth implements Action {
  public readonly type = EUserActions.GET_IS_AUTH

  constructor(public payload: any) {
  }
}

export class GetIsAuthSuccess implements Action {
  public readonly type = EUserActions.GET_IS_AUTH_SUCCESS

  constructor(public payload: any) {
  }
}

export class LogoutSuccess implements Action {
  public readonly type = EUserActions.LOGOUT_SUCCESS
}


export type UserActions =
  CreateUser | CreateUserSuccess |
  Login | LoginSuccess |
  GetIsAuth | GetIsAuthSuccess |
  LogoutSuccess
