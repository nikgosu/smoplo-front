import {Action} from "@ngrx/store";

export enum EConfigActions {
  GET_CONFIG = '[Config] Get Config',
  GET_CONFIG_SUCCESS = '[Config] Get Config Success',
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GET_CONFIG
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GET_CONFIG_SUCCESS
  constructor(public payload: any) {
  }
}

export type ConfigActions = GetConfig | GetConfigSuccess
