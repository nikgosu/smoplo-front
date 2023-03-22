import {CreativeModel} from "../../models/creatives-model";

export interface CreativesState {
  creatives: CreativeModel[]
  selectedCreative: CreativeModel | null
}

export interface UserState {
  user: any
}

export interface AppState {
  creatives: CreativesState,
  user: any
}
