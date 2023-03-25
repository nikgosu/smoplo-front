import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CreativeService} from "../../services/creative.service";
import {first, Observable} from "rxjs";
import {ANIMATIONS} from "../../consts";

@Component({
  selector: 'app-creative-edit',
  templateUrl: './creative-edit.component.html',
  styleUrls: ['./creative-edit.component.scss']
})
export class CreativeEditComponent {
  form$!: Observable<any>
  animations = ANIMATIONS
  selectedCreative!: any

  constructor(
    private _creativeService: CreativeService,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.form$ = this._creativeService.form.asObservable()
  }

  ngOnInit() {
    this._activatedRoute.data.pipe(first()).subscribe(({creative}) => {
      this.selectedCreative = creative
      creative && this._creativeService.createForm(creative)
      if (!creative) {
        this._creativeService.createForm()
      }
    })

  }

  handleCreativeSave() {
    if (this.selectedCreative) {
      this._creativeService.createCreative()
    } else {
      this._creativeService.updateCreative()
    }
  }
}
