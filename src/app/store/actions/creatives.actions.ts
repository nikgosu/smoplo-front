import {Action} from "@ngrx/store";
import {CreativeModel} from "../../models/creatives-model";

export enum ECreativesActions {
  GET_CREATIVE = '[CREATIVE] Get Creative',
  GET_CREATIVE_SUCCESS = '[CREATIVE] Get Creative Success',
  GET_CREATIVES = '[CREATIVE] Get Creatives',
  GET_CREATIVES_SUCCESS = '[CREATIVE] Get Creatives Success',
  CREATE_CREATIVE = '[CREATIVE] Create Creative',
  CREATE_CREATIVE_SUCCESS = '[CREATIVE] Create Creative Success',
  UPDATE_CREATIVE = '[CREATIVE] Update Creative',
  UPDATE_CREATIVE_SUCCESS = '[CREATIVE] Update Creative Success',
  DELETE_CREATIVE = '[CREATIVE] Delete Creative',
  DELETE_CREATIVE_SUCCESS = '[CREATIVE] Delete Creative Success',
}

export class GetCreative implements Action {
  public readonly type = ECreativesActions.GET_CREATIVE

  constructor(public payload: string) {
  }
}

export class GetCreativeSuccess implements Action {
  public readonly type = ECreativesActions.GET_CREATIVE_SUCCESS

  constructor(public payload: CreativeModel) {
  }
}

export class GetCreatives implements Action {
  public readonly type = ECreativesActions.GET_CREATIVES
}

export class GetCreativesSuccess implements Action {
  public readonly type = ECreativesActions.GET_CREATIVES_SUCCESS

  constructor(public payload: CreativeModel[]) {
  }
}

export class CreateCreative implements Action {
  public readonly type = ECreativesActions.CREATE_CREATIVE

  constructor(public payload: CreativeModel) {
  }
}

export class CreateCreativeSuccess implements Action {
  public readonly type = ECreativesActions.CREATE_CREATIVE_SUCCESS

  constructor(public payload: CreativeModel) {
  }
}

export class UpdateCreative implements Action {
  public readonly type = ECreativesActions.UPDATE_CREATIVE

  constructor(public payload: CreativeModel) {
  }
}

export class UpdateCreativeSuccess implements Action {
  public readonly type = ECreativesActions.UPDATE_CREATIVE_SUCCESS

  constructor(public payload: CreativeModel) {
  }
}

export class DeleteCreative implements Action {
  public readonly type = ECreativesActions.DELETE_CREATIVE

  constructor(public payload: string) {
  }
}

export class DeleteCreativeSuccess implements Action {
  public readonly type = ECreativesActions.DELETE_CREATIVE_SUCCESS

  constructor(public payload: CreativeModel) {
  }
}

export type CreativesActions =
  GetCreative | GetCreativeSuccess |
  GetCreatives | GetCreativesSuccess |
  CreateCreative | CreateCreativeSuccess |
  UpdateCreative | UpdateCreativeSuccess |
  DeleteCreative | DeleteCreativeSuccess
