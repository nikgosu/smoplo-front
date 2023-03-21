import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {CreativeModel} from "../models/creatives-model";

@Injectable({
  providedIn: 'root'
})

export class CreativeService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as FormGroup)

  constructor(private _formBuilder: FormBuilder) {
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
    })
    if (creative) {
      formGroup.addControl('_id', new FormControl(creative._id));
      formGroup.addControl('__v', new FormControl(creative.__v));
    }
    this.form.next(formGroup)
  }
}
