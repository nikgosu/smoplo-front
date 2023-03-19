import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreativeService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as any)
  constructor() { }

  createForm(creative: any) {
    this.form.next(new FormGroup<any>({
      _id: new FormControl(creative._id),
      name: new FormControl(creative.name),
      animation: new FormControl(creative.animation),
      height: new FormControl(creative.height),
      horizontalPos: new FormControl(creative.horizontalPos),
      imageSize: new FormControl(creative.imageSize),
      verticalPos: new FormControl(creative.verticalPos),
      width: new FormControl(creative.width),
      imageSrc: new FormControl(creative.imageSrc),
      __v: new FormControl(creative.__v),
    }))
    console.log(this.form.value)
  }
}
