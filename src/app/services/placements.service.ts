import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "./user.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/state";
import {CreatePlacement} from "../store/actions/placements.actions";
import {CampaignsService} from "./campaigns.service";
import {selectCampaignsList} from "../store/selectors/campaigns.selector";
import {selectPlacementsList, selectSelectedPlacement} from "../store/selectors/placements.selector";

@Injectable({
  providedIn: 'root'
})
export class PlacementsService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as FormGroup)
  placement!: any
  placements!: any
  placement$ = this._store.pipe(select(selectSelectedPlacement))
  placements$ = this._store.pipe(select(selectPlacementsList))

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _campaignsService: CampaignsService,
    private _store: Store<AppState>
  ) {
    this.placements$.subscribe(placements => {
      this.placements = placements
    })
    this.placement$.subscribe(placement => {
      this.placement = placement
    })
  }

  createForm(formValue: any = null, campaignsList: any = null) {
    let campaignName
    if (formValue) {
      campaignName = campaignsList.find((campaign: any) => campaign._id === formValue.campaignId).name
    }
    const formGroup = this._formBuilder.group<any>({
      name: formValue ? this.form.value.value.name : '',
      campaignName: formValue ? campaignName : this._campaignsService.campaign.name,
      campaignId: formValue ? this.form.value.value.campaignId : this._campaignsService.campaign._id,
      size: formValue ? this.form.value.value.size : '',
      userId: formValue ? this.form.value.value.userId : this._userService.user._id,
      creatives: 0
    })
    this.form.next(formGroup)
  }

  createPlacement(campaignsList?: any) {
    this.createForm(this.form.value.value, campaignsList)
    this._store.dispatch(new CreatePlacement(this.form.value.value))
  }
}
