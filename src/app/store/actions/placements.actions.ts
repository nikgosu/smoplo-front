import {Action} from "@ngrx/store";
import {CreativeModel} from "../../models/creatives-model";

export enum EPlacementsActions {
  GET_PLACEMENT = '[PLACEMENT] Get Placement',
  GET_PLACEMENT_SUCCESS = '[PLACEMENT] Get Placement Success',
  GET_PLACEMENTS = '[PLACEMENT] Get Placements',
  GET_PLACEMENTS_SUCCESS = '[PLACEMENT] Get Placements Success',
  CREATE_PLACEMENT = '[PLACEMENT] Create Placement',
  CREATE_PLACEMENT_SUCCESS = '[PLACEMENT] Create Placement Success',
}

export class GetPlacement implements Action {
  public readonly type = EPlacementsActions.GET_PLACEMENT

  constructor(public payload: string) {
  }
}

export class GetPlacementSuccess implements Action {
  public readonly type = EPlacementsActions.GET_PLACEMENT_SUCCESS

  constructor(public payload: any) {
  }
}

export class GetPlacements implements Action {
  public readonly type = EPlacementsActions.GET_PLACEMENTS

  constructor(public payload: any) {
  }
}

export class GetPlacementsSuccess implements Action {
  public readonly type = EPlacementsActions.GET_PLACEMENTS_SUCCESS

  constructor(public payload: any[]) {
  }
}

export class CreatePlacement implements Action {
  public readonly type = EPlacementsActions.CREATE_PLACEMENT

  constructor(public payload: CreativeModel) {
  }
}

export class CreatePlacementSuccess implements Action {
  public readonly type = EPlacementsActions.CREATE_PLACEMENT_SUCCESS

  constructor(public payload: any) {
  }
}

export type PlacementsActions =
  GetPlacement | GetPlacementSuccess |
  GetPlacements | GetPlacementsSuccess |
  CreatePlacement | CreatePlacementSuccess
