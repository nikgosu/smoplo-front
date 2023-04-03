import {createSelector} from "@ngrx/store";
import {AppState, CampaignsState} from "../state";

const selectCampaigns = (state: AppState) => {
  return state.campaigns
}

export const selectCampaignsList = createSelector(
  selectCampaigns,
  (state: CampaignsState) => state.campaigns
)

export const selectSelectedCampaign = createSelector(
  selectCampaigns,
  (state: CampaignsState) => state.selectedCampaign
)
