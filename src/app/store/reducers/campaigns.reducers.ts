import {CampaignsState} from "../state";
import {initialCampaignsState} from "../state/campaigns.state";
import {CampaignsActions, ECampaignsActions} from "../actions/campaigns.actions";

export const campaignsReducers = (state = initialCampaignsState, action: CampaignsActions): CampaignsState => {
  switch (action.type) {
    case ECampaignsActions.GET_CAMPAIGN_SUCCESS: {
      return {
        ...state,
        selectedCampaign: action.payload
      }
    }
    case ECampaignsActions.GET_CAMPAIGNS_SUCCESS: {
      return {
        ...state,
        campaigns: action.payload
      }
    }
    case ECampaignsActions.CREATE_CAMPAIGN_SUCCESS: {
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload]
      }
    }
    default:
      return state
  }
}
