import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CreativeService} from "../../services/creative.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {CreateCreative, UpdateCreative} from "../../store/actions/creatives.actions";
import {ANIMATIONS} from "../../consts";
import {AppState} from "../../store/state";

@Component({
  selector: 'app-creative-edit',
  templateUrl: './creative-edit.component.html',
  styleUrls: ['./creative-edit.component.scss']
})
export class CreativeEditComponent {
  form$!: Observable<any>
  animations = ANIMATIONS
  selectedCreative!: any
  unsubscribe$ = new Subject<void>()

  constructor(
    private _creativeService: CreativeService,
    private _activatedRoute: ActivatedRoute,
    private _store: Store<AppState>
  ) {
    this.form$ = this._creativeService.form.asObservable()
  }

  ngOnInit() {
    this._activatedRoute.data.pipe(takeUntil(this.unsubscribe$)).subscribe(({creative}) => {
      this.selectedCreative = creative
      creative && this._creativeService.createForm(creative)
      if (!creative) {
        this._creativeService.createForm()
      }
    })

  }

  handleCreativeSave() {
    if (this.selectedCreative) {
      this._store.dispatch(new UpdateCreative(this._creativeService.form.value.value))
    } else {
      this._store.dispatch(new CreateCreative(this._creativeService.form.value.value))
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
