import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {DeleteCreative} from "../../store/actions/creatives.actions";
import {AppState} from "../../store/state";

@Component({
  selector: 'app-creative-card',
  templateUrl: './creative-card.component.html',
  styleUrls: ['./creative-card.component.scss']
})
export class CreativeCardComponent {
  @Input() creative: any

  constructor(private _store: Store<AppState>) {
  }

  handleCreativeDelete() {
    this._store.dispatch(new DeleteCreative(this.creative))
  }
}
