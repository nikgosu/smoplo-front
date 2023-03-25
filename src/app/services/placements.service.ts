import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PlacementsService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as FormGroup)

  constructor(private _formBuilder: FormBuilder) {
  }

  createForm() {
    let formGroup = this._formBuilder.group<any>({
      name: '',
      campaign: '',
      size: ''
    })
    this.form.next(formGroup)
  }
}
