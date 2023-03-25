import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class PlacementsService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as FormGroup)

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
  ) {
  }

  createForm() {
    let formGroup = this._formBuilder.group<any>({
      name: '',
      campaignId: '',
      size: '',
      userId: this._userService.user.userId
    })
    this.form.next(formGroup)
  }
}
