import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreativeService {
  form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>({} as any)
  constructor() { }

  createForm(creative?: any) {
    this.form.next(new FormGroup<any>({
      _id: new FormControl(creative ? creative._id : ''),
      name: new FormControl(creative ? creative.name : ''),
      animation: new FormControl(creative ? creative.animation : ''),
      height: new FormControl(creative ? creative.height : 100),
      horizontalPos: new FormControl(creative ? creative.horizontalPos : 0),
      imageSize: new FormControl(creative ? creative.imageSize : 100),
      verticalPos: new FormControl(creative ? creative.verticalPos : 0),
      width: new FormControl(creative ? creative.width : 100),
      imageSrc: new FormControl(creative ? creative.imageSrc : ''),
      __v: new FormControl(creative ? creative.__v : ''),
    }))
  }
}
