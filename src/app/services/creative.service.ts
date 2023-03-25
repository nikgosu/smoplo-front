import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {CreativeModel} from "../models/creatives-model";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state";
import {CreateCreative, UpdateCreative} from "../store/actions/creatives.actions";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})

export class CreativeService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as FormGroup)

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
    private _userService: UserService,
  ) {
  }

  createForm(creative?: CreativeModel) {
    let formGroup = this._formBuilder.group<CreativeModel>({
      name: creative ? creative.name : '',
      animation: creative ? creative.animation : '',
      height: creative ? creative.height : 100,
      horizontalPos: creative ? creative.horizontalPos : 0,
      imageSize: creative ? creative.imageSize : 100,
      verticalPos: creative ? creative.verticalPos : 100,
      width: creative ? creative.width : 100,
      imageSrc: creative ? creative.imageSrc : '',
      userId: this._userService.user.userId,
      campaignId: this._userService.user.userId,
      placementId: this._userService.user.userId
    })
    if (creative) {
      formGroup.addControl('_id', new FormControl(creative._id));
      formGroup.addControl('__v', new FormControl(creative.__v));
    }
    this.form.next(formGroup)
  }

  createCreative() {
    this._store.dispatch(new CreateCreative(this.form.value.value))
  }

  updateCreative() {
    this._store.dispatch(new UpdateCreative(this.form.value.value))
  }
}
