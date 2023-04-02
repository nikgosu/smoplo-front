import {Action} from "@ngrx/store";
import {CreativeModel} from "../../models/creatives-model";

export enum ECampaignsActions {
  GET_CAMPAIGN = '[CAMPAIGN] Get Campaign',
  GET_CAMPAIGN_SUCCESS = '[CAMPAIGN] Get Campaign Success',
  GET_CAMPAIGNS = '[CAMPAIGN] Get Campaigns',
  GET_CAMPAIGNS_SUCCESS = '[CAMPAIGN] Get Campaigns Success',
  CREATE_CAMPAIGN = '[CAMPAIGN] Create Campaign',
  CREATE_CAMPAIGN_SUCCESS = '[CAMPAIGN] Create Campaign Success',
}

export class GetCampaign implements Action {
  public readonly type = ECampaignsActions.GET_CAMPAIGN

  constructor(public payload: string) {
  }
}

export class GetCampaignSuccess implements Action {
  public readonly type = ECampaignsActions.GET_CAMPAIGN_SUCCESS

  constructor(public payload: any) {
  }
}

export class GetCampaigns implements Action {
  public readonly type = ECampaignsActions.GET_CAMPAIGNS

  constructor(public payload: string) {
  }
}

export class GetCampaignsSuccess implements Action {
  public readonly type = ECampaignsActions.GET_CAMPAIGNS_SUCCESS

  constructor(public payload: any[]) {
  }
}

export class CreateCampaign implements Action {
  public readonly type = ECampaignsActions.CREATE_CAMPAIGN

  constructor(public payload: any) {
  }
}

export class CreateCampaignSuccess implements Action {
  public readonly type = ECampaignsActions.CREATE_CAMPAIGN_SUCCESS

  constructor(public payload: any) {
  }
}

export type CampaignsActions =
  GetCampaign | GetCampaignSuccess |
  GetCampaigns | GetCampaignsSuccess |
  CreateCampaign | CreateCampaignSuccess
