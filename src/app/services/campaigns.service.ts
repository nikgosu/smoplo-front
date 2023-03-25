import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "./user.service";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state";
import {CreateCampaign} from "../store/actions/campaigns.actions";

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as FormGroup)

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _store: Store<AppState>
  ) {
  }

  createForm() {
    let formGroup = this._formBuilder.group<any>({
      name: '',
      userId: this._userService.user._id
    })
    this.form.next(formGroup)
  }

  createCampaign() {
    this._store.dispatch(new CreateCampaign(this.form.value.value))
  }
}
