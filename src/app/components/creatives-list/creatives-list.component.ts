import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectCreativesList} from "../../store/selectors/creatives.selector";
import {GetCreatives} from "../../store/actions/creatives.actions";
import {AppState} from "../../store/state";

@Component({
  selector: 'app-creatives-list',
  templateUrl: './creatives-list.component.html',
  styleUrls: ['./creatives-list.component.scss']
})
export class CreativesListComponent {
  creatives$ = this._store.pipe(select(selectCreativesList))

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit() {
    this._store.dispatch(new GetCreatives())
  }
}
