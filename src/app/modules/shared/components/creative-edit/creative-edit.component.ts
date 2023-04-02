import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CreativesService} from "../../../../services/creatives.service";
import {first, Observable} from "rxjs";
import {ANIMATIONS} from "../../../../consts";

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
    private _creativeService: CreativesService,
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
    this._creativeService.updateCreative()
  }
}
