import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CREATIVES_MOCK} from "../../../mock";
import {CreativeService} from "../../services/creative.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {CreateCreative, GetCreative, GetCreatives, UpdateCreative} from "../../store/actions/creatives.actions";
import {selectCreativesList, selectSelectedCreative} from "../../store/selectors/creatives.selector";

@Component({
  selector: 'app-creative-edit',
  templateUrl: './creative-edit.component.html',
  styleUrls: ['./creative-edit.component.scss']
})
export class CreativeEditComponent {
  form$!: Observable<any>
  params!: string | null
  animations: any[] = ['from top', 'from bottom', 'rotate Z', 'scale'];
  selectedCreative$ = this._store.pipe(select(selectSelectedCreative))

  constructor(
    private route: ActivatedRoute,
    private creativeService: CreativeService,
    private _store: Store<any>
  ) {
    this.form$ = this.creativeService.form.asObservable()
  }

  ngOnInit() {
    this.params = this.route.snapshot.paramMap.get('id');
    if (this.params) {
      this._store.dispatch(new GetCreative(this.params))
      this.selectedCreative$.subscribe(creative => {
        this.creativeService.createForm(creative)
      })
    } else {
      this.creativeService.createForm()
    }
  }

  handleCreativeSave() {
    if (this.params) {
      this._store.dispatch(new UpdateCreative(this.creativeService.form.value.value))
      console.log(this.creativeService.form.value.value)
    }
    else {
      console.log(this.creativeService.form.value.value)
      this._store.dispatch(new CreateCreative(this.creativeService.form.value.value))
    }
  }
}
