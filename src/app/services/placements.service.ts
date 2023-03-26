import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "./user.service";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state";
import {CreatePlacement} from "../store/actions/placements.actions";
import {CampaignsService} from "./campaigns.service";

@Injectable({
  providedIn: 'root'
})
export class PlacementsService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as FormGroup)

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _campaignsService: CampaignsService,
    private _store: Store<AppState>
  ) {
  }

  createForm() {
    let formGroup = this._formBuilder.group<any>({
      name: '',
      campaignId: this._campaignsService.campaign._id,
      size: '',
      userId: this._userService.user.userId
    })
    this.form.next(formGroup)
  }

  createPlacement() {
    this._store.dispatch(new CreatePlacement(this.form.value.value))
  }
}
