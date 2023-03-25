import {CreativeModel} from "../../models/creatives-model";

export interface CampaignsState {
  campaigns: any[]
  selectedCampaign: any | null
}

export interface CreativesState {
  creatives: CreativeModel[]
  selectedCreative: CreativeModel | null
}

export interface UserState {
  user: any
}

export interface AppState {
  user: any
  campaigns: CampaignsState
  creatives: CreativesState,
}
