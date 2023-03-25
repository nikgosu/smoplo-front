import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {DeleteCreative} from "../../store/actions/creatives.actions";
import {AppState} from "../../store/state";
import {ActivatedRoute} from "@angular/router";
import {ERoutes} from "../../router/models";

@Component({
  selector: 'app-creative-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() listItem: any
  path = this._activatedRoute.snapshot.routeConfig?.path

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store<AppState>
  ) {
  }

  handleDelete() {
    if (this.path === ERoutes.CREATIVES) {
      this._store.dispatch(new DeleteCreative(this.listItem))
    }
  }
}
