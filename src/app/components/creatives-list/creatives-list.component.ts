import { Component } from '@angular/core';
import {CREATIVES_MOCK} from "../../../mock";
import {select, Store} from "@ngrx/store";
import {selectCreativesList} from "../../store/selectors/creatives.selector";
import {GetCreatives} from "../../store/actions/creatives.actions";

@Component({
  selector: 'app-creatives-list',
  templateUrl: './creatives-list.component.html',
  styleUrls: ['./creatives-list.component.scss']
})
export class CreativesListComponent {
  creatives = CREATIVES_MOCK

  creatives$ = this._store.pipe(select(selectCreativesList))
  constructor(private _store: Store<any>) {
  }
  ngOnInit() {
    this._store.dispatch(new GetCreatives())
  }
}
